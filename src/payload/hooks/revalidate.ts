import { revalidatePath } from "next/cache";

export const revalidateHook = async (data: any) => {
  let paths = []

  const { doc, collection, global } = data
  const key = collection?.slug ?? global.slug

  switch (key) {
    case 'posts':
      paths.push(`/posts/${doc.slug}`)
      paths.push('/')
      break;
    case 'authors':
      paths.push('/')
      break;
    case 'home':
      paths.push('/')
      break;
    default:
      break;
  }

  paths.forEach(path => revalidatePath(path))

  return doc
}
