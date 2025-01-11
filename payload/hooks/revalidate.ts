import { revalidatePath } from "next/cache";

export default async function revalidateHook(data: any) {
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
  console.log(paths)
  paths.forEach(path => revalidatePath(path))
  return doc
}
