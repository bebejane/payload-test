'use client'

import { TextInput, useField } from '@payloadcms/ui'

type Props = {
  field: any
}

export default function Pathname({ field }: Props) {
  const { value = '', setValue } = useField<string>({ path: field.name })

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
