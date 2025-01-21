'use server'

import type { AdminViewProps } from 'payload'
import { Gutter } from '@payloadcms/ui'
import React from 'react'

const Dashboard: React.FC<AdminViewProps> = (props) => {
  //@ts-ignore
  const { params, searchParams, user, payload, locale, i18n, visibleEntities, permissions } = props ?? {}

  return <Gutter>Custom Dashboard</Gutter>
}

export default Dashboard
