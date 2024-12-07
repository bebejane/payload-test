'use client'

import { kebabCase } from 'lodash-es';
import { TextInput, useField, useWatchForm } from '@payloadcms/ui';
import { useEffect, useRef } from 'react';

export default function Header({ }: {}) {

  const { getDataByPath } = useWatchForm();
  const { value, setValue } = useField<string>({ path: 'header' });

  return (
    <h1>
      {value}
    </h1>
  );
}
