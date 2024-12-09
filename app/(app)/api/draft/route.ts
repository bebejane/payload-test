'use server'

import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { CollectionSlug, getPayload, GlobalSlug } from 'payload'
import configPromise from '@payload-config'


export const GET = async (request: Request): Promise<Response | void> => {

  //  const payload = await getPayload({ config: configPromise })
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const slug = searchParams.get('slug') as string
  const collection = searchParams.get('collection') as CollectionSlug
  const global = searchParams.get('global') as GlobalSlug

  const maxAge = searchParams.get('max-age')
  const exit = searchParams.get('exit')

  if (secret !== process.env.PAYLOAD_SECRET)
    return new Response('Invalid secret', { status: 401 })

  if (!collection && !global)
    return new Response('Invalid collection/globals slug', { status: 404 })

  const draft = await draftMode()

  if (!exit) {
    console.log('enter draft mode');
    draft.enable()
  } else {
    console.log('exit draft mode');
    draft.disable()
  }

  if (maxAge !== null) {
    const bypassCookie = (await cookies()).get('__prerender_bypass');
    if (!bypassCookie)
      throw new Error('No bypass cookie found');

    (await cookies()).set(bypassCookie.name, bypassCookie.value, {
      httpOnly: true,
      sameSite: 'none',
      secure: true,
      path: '/',
      maxAge: parseInt(maxAge)
    })
  }

  if (slug)
    redirect(slug)
  else
    return new Response('OK', { status: 200 })
}


const slugExists = async (slug: string, collection: string): Promise<boolean> => {
  const payload = await getPayload({ config: configPromise })
  const { docs } = await payload.find({
    collection: collection as CollectionSlug,
    limit: 1,
    pagination: false,
    depth: 0,
    select: {},
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  if (docs.length === 1) return true

  const doc = await payload.findGlobal({
    slug: collection as GlobalSlug,
    depth: 0,
    select: {},
  }).catch(() => { })


  return doc?.id ? true : false
}