import { draftMode, headers } from 'next/headers'
import type { RequestInit } from 'next/dist/server/web/spec-extension/request'
import { DocumentNode, FieldNode, OperationDefinitionNode, VariableDefinitionNode } from 'graphql/language';
import { print } from 'graphql/language/printer'
import { defaultLocale } from '@/i18n/request';

export type ApiQueryOptions<V = void> = {
  variables?: V;
  includeDrafts?: boolean;
  excludeInvalid?: boolean;
  visualEditingBaseUrl?: string | undefined;
  revalidate?: number | undefined;
  tags?: string[] | undefined,
  generateTags?: boolean
  maxTags?: number
  logs?: boolean
  all?: boolean
};

export type DefaultApiQueryOptions = ApiQueryOptions & {
  variables: undefined,
  includeDrafts: boolean,
  excludeInvalid: boolean,
  visualEditingBaseUrl: string | undefined,
  revalidate: number | undefined,
  tags: string[] | undefined,
  generateTags: boolean,
  maxTags: number,
  logs: boolean
  all: boolean
}

const defaultOptions: DefaultApiQueryOptions = {
  variables: undefined,
  includeDrafts: false,
  excludeInvalid: true,
  visualEditingBaseUrl: undefined,
  revalidate: isNaN(parseInt(process.env.REVALIDATE_TIME as string)) ? parseInt(process.env.REVALIDATE_TIME as string) : 3600,
  tags: undefined,
  generateTags: false,
  maxTags: 64,
  logs: false,
  all: false
};


export default async function apiQuery<T, V = void>(query: any, options?: ApiQueryOptions<V>): Promise<T & { draftUrl: string | null }> {

  query = query as DocumentNode

  const opt = { ...defaultOptions, ...(options ?? {}) };
  const queryId = (query.definitions?.[0] as any).name?.value as string

  const variables = {
    ...(options?.variables ?? {}),
    draft: (await draftMode()).isEnabled,
    locale: (await headers()).get('x-next-intl-locale') ?? defaultLocale
  }

  const dedupeOptions: DedupeOptions = {
    body: JSON.stringify({ query: print(query), variables }) as string,
    ...opt,
    queryId
  }

  const tags = opt.tags
  const res = await dedupedFetch({ ...dedupeOptions, tags });

  if (opt.all) {
    //const paginatedData = await paginatedQuery<T, V>(query, opt, res.data, queryId)
    //return { ...paginatedData, draftUrl: res.url ?? null }
  }

  return { ...res.data, draftUrl: res.url ?? null }
}


const paginatedQuery = async <T, V = void>(query: DocumentNode, options: ApiQueryOptions<any>, data: any, queryId: string): Promise<T> => {

  try {

    if (typeof data !== 'object' || data === null || data === undefined)
      throw new Error('Data must be an object')

    const operation = query.definitions?.find(({ kind }) => kind === 'OperationDefinition') as OperationDefinitionNode

    if (!operation)
      throw new Error('Query must have an operation definition')

    const firstVariable = operation.variableDefinitions?.find(v => v.variable.name.value === 'first') as VariableDefinitionNode
    const skipVariable = operation.variableDefinitions?.find(v => v.variable.name.value === 'skip') as VariableDefinitionNode

    if (!firstVariable || !skipVariable)
      throw new Error(`Query must have first and skip variables`)

    const pageKeys = Object.keys(data).filter(k => k.startsWith('_all') && k.endsWith('Meta'))

    if (pageKeys.length === 0)
      throw new Error('Query must have at least one paginated field')

    const pageKeyMap = pageKeys.reduce<{ [key: string]: string }>((acc, cur) => {
      acc[cur] = `${cur.substring(1, cur.length - 'Meta'.length)}`
      return acc
    }, {})

    // Check filter diff
    Object.keys(pageKeyMap).forEach(k => {
      const filter = (operation.selectionSet.selections.find(s => (s as FieldNode).name.value === k) as FieldNode)?.arguments?.find(a => a.name.value === 'filter')
      const metaFilter = (operation.selectionSet.selections.find(s => (s as FieldNode).name.value === pageKeyMap[k]) as FieldNode)?.arguments?.find(a => a.name.value === 'filter')
      if ((!filter && metaFilter) || (filter && !metaFilter) || JSON.stringify(filter) !== JSON.stringify(metaFilter))
        throw new Error(`Query must have same filter argument on ${k} and ${pageKeyMap[k]}`)
    })

    const first = options.variables?.first ?? (firstVariable?.defaultValue as any)?.value ?? 100

    if (first > 100)
      throw new Error('"first" variable must be less than or equal to 100')

    let count = 0

    while (Object.keys(pageKeyMap).some(k => data[k].count > data[pageKeyMap[k]].length)) {
      const maxPageKey = pageKeyMap[Object.keys(pageKeyMap).sort((a, b) => data[a].count > data[b].count ? -1 : 1)[0]]
      const skip = data[maxPageKey].length

      const pageData: any = await apiQuery(query, {
        ...options,
        all: false,
        variables: {
          ...options.variables,
          first,
          skip
        }
      })

      Object.keys(pageKeyMap).forEach(k =>
        data[pageKeyMap[k]] = [...data[pageKeyMap[k]], ...pageData[pageKeyMap[k]]]
      )

      if (++count > 1000) {
        throw new Error('Paginated query exceeded 1000 requests')
      }
    }

    return data
  } catch (e) {
    throw new Error(`${queryId}: ${(e as Error).message}`)
  }
}

export type DedupeOptions = {
  url?: string
  body: string;
  includeDrafts: boolean;
  excludeInvalid: boolean;
  visualEditingBaseUrl: string | undefined;
  revalidate?: number;
  tags?: string[] | undefined
  queryId: string,
  logs: boolean
}

const dedupedFetch = async (options: DedupeOptions) => {
  const {
    url,
    includeDrafts,
    body,
    revalidate,
    tags,
    queryId,
    logs
  } = options;

  const response = await fetch(process.env.GRAPHQL_API_ENDPOINT as string, {
    method: 'POST',
    body,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'credentials': 'include',
    },
    next: {
      revalidate,
      tags: Array.isArray(tags) ? tags : undefined
    }
  } as RequestInit);

  const responseBody = await response.json();

  if (!response.ok)
    throw new Error(`${response.status} ${response.statusText}: ${JSON.stringify(responseBody)}`);
  if (responseBody.errors) {
    console.log(responseBody.errors)
    throw new Error(`${queryId}: ${responseBody.errors.map((e: any) => e?.message).join('. ')}`);
  }

  logs && console.log('[api-query]', queryId, { ...options, body: undefined }, `tags: ${tags?.length ?? 0}`, response.headers.get('x-cache'))
  return responseBody;
}