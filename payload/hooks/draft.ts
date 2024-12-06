import { draftMode } from "next/headers";

export default async function draftHook(data: any) {
  const { doc } = data

  if (doc?._status === 'published') {
    (await draftMode()).disable()
  } else if (doc?._status === 'draft') {
    (await draftMode()).enable()
  }
  return doc
}
