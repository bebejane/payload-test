import { draftMode } from "next/headers";

export default async function draftHook(data: any) {
  const { doc } = data
  if (doc?._status === 'published') {
    (await draftMode()).disable()
    console.log(doc?._status, 'disabled draft mode')
  } else if (doc?._status === 'draft') {
    (await draftMode()).enable()
    console.log(doc?._status, 'enabled draft mode')
  }
  return doc
}
