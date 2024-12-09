'use client'

import { kebabCase } from 'lodash-es'
import { TextInput, useField, useWatchForm } from '@payloadcms/ui'
import { useEffect, useRef } from 'react'

export default function Pathname({ trackingField = 'title' }: { trackingField: string }) {
  const { getDataByPath } = useWatchForm()
  const { value = '', setValue } = useField<string>({ path: '_pathname' })

  return (
    <div style={{ marginBottom: '1rem' }}>
      <TextInput
        path="slug"
        label="Slug"
        description={
          value
            ? `Auto generated based on ${trackingField}`
            : `Will be auto-generated from ${trackingField} when save`
        }
        value={value}
        onChange={(e: any) => {
          setValue(e.target.value)
        }}
      />
    </div>
  )
}
