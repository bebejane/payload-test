
type Props = {
  src: string
  width: number
  quality: number
}

export default function cloudinaryLoader(props: Props) {
  const { src, width, quality } = props
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  const cloudFolder = process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER

  if (!cloudName) {
    throw new Error('NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is required in the environment')
  }
  const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`]
  const filename = src.split('/').pop()
  return `https://res.cloudinary.com/${cloudName}/image/upload/${params.join(',')}${cloudFolder ? `/${cloudFolder}` : ''}/${filename}`
}
