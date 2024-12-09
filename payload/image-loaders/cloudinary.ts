
export default function cloudinaryLoader({ src, width, quality }: any) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  if (!cloudName) {
    throw new Error('NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is required in the environment')
  }
  const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`]
  const filename = src.split('/').pop()
  return `https://res.cloudinary.com/${cloudName}/image/upload/${params.join(',')}/${filename}`
}
