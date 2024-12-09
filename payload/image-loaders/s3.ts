export default function imageLoader(props: { src: string }) {
  const filename = props.src.split('/').pop()
  return `https://${process.env.NEXT_PUBLIC_S3_BUCKET}.s3.${process.env.NEXT_PUBLIC_S3_REGION}.amazonaws.com/${filename}`
}
