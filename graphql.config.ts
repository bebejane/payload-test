import "dotenv/config"
import type { IGraphQLConfig } from 'graphql-config'

const defaultConfig = {
	dedupeOperationSuffix: true,
	dedupeFragments: true,
	pureMagicComment: false,
	exportFragmentSpreadSubTypes: true,
	namingConvention: "keep",
	skipDocumentsValidation: false,
}

const config: IGraphQLConfig = {
	schema: {
		[`${process.env.NEXT_PUBLIC_SITE_URL}/api/graphql`]: {
			headers: {
				//"Authorization": process.env.DATOCMS_API_TOKEN as string,
			},
		},
	},
	documents: "graphql/**/*.gql",
	extensions: {
		codegen: {
			overwrite: true,
			generates: {
				"graphql/index.ts": {
					plugins: ["typed-document-node"],
					config: { ...defaultConfig }
				},
				"types/payload.d.ts": {
					plugins: [
						"typescript",
						"typescript-operations",
					],
					config: { ...defaultConfig, noExport: true }
				},
				"types/document-modules.d.ts": {
					plugins: ["typescript-graphql-files-modules"],
					config: { ...defaultConfig }
				},
			},
		}
	},
}

export default config;