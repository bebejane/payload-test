'use client'

import { TextInput, useField } from '@payloadcms/ui'

type Props = {
  path: string
}

export default function Pathname({ path }: Props) {
  const { value = '', setValue } = useField<string>({ path })

  return (
    <div style={{ marginBottom: '1rem' }}>
      <TextInput
        path="pathname"
        label="Pathname"
        readOnly={true}
        value={value}
        onChange={(e: any) => {
          setValue(e.target.value)
        }}
      />
    </div>
  )
}
