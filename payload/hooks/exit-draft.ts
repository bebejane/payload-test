import { draftMode } from "next/headers";

export const exitDraftHook = async (data: any) => {
  const { doc } = data
  if (doc._status === 'published') {
    (await draftMode()).disable()
    console.log('disabled draft mode')
  }
  return doc
}
