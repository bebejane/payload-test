
export async function translate(doc: any, slug: string, locale: string) {
  let path = null
  switch (slug) {
    case 'home':
      path = `/`;
      break;
    case 'posts':
      if (doc.slug)
        path = `/posts/${doc.slug}`
      break
    default:
      path = null
      break;
  }
  return path ? [`/${locale}${path === '/' ? '' : path}`] : null
}
