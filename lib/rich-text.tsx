import { DefaultNodeTypes, SerializedBlockNode } from '@payloadcms/richtext-lexical'
import {
  JSXConverters,
  JSXConvertersFunction,
  RichText as RichTextLexical,
} from '@payloadcms/richtext-lexical/react'
import { QuoteBlock } from '@/payload/payload-types'

export type NodeTypes = DefaultNodeTypes | SerializedBlockNode<QuoteBlock>

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  blocks: {
    ...defaultConverters.blocks,
    quoteBlock: ({ node }) => (
      <div style={{ backgroundColor: 'pink' }}>{node.fields.quoteHeader}</div>
    ),
  },
})

export type Props = {
  className?: string
  converters?: JSXConverters | JSXConvertersFunction
  data: any
  disableIndent?: boolean | string[]
  disableTextAlign?: boolean | string[]
}

export default async function RichText(props: Props) {
  return (
    <RichTextLexical
      {...props}
      //@ts-ignore
      converters={jsxConverters}
    />
  )
}
