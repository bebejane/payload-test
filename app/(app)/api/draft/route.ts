'use server'

import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export const GET = async (request: Request): Promise<Response | void> => {

  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const slug = searchParams.get('slug')
  const maxAge = searchParams.get('max-age')
  const exit = searchParams.get('exit')

  if (secret !== process.env.PAYLOAD_SECRET)
    return new Response('Invalid secret', { status: 401 })

  if (exit) {
    console.log('exit draft mode');
    (await draftMode()).disable()
  } else {
    console.log('enter draft mode');
    (await draftMode()).enable()
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