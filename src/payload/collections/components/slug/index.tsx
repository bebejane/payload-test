'use client'

import { kebabCase } from 'lodash-es';
import { TextInput, useField, useWatchForm } from '@payloadcms/ui';
import { useEffect, useRef } from 'react';

export default function GetSlugInput({ trackingField = 'title' }: { trackingField: string }) {

  const { getDataByPath } = useWatchForm();
  const { value: slugValue = '', setValue: setSlugValue } = useField<string>({ path: 'slug' });
  const trackingFieldValue = getDataByPath<string>(trackingField) || '';
  const prevTrackingFieldValueRef = useRef(trackingFieldValue);
  const stopTrackingRef = useRef(false);

  useEffect(() => {
    if (!trackingField || stopTrackingRef.current) {
      console.log('stop tracking 1', stopTrackingRef.current);
      return;
    }
    if (trackingFieldValue === prevTrackingFieldValueRef.current) {
      console.log('stop tracking 2');
      return;
    }
    const prevSlugValue = kebabCase(prevTrackingFieldValueRef.current);
    prevTrackingFieldValueRef.current = trackingFieldValue;
    if (prevSlugValue !== slugValue && slugValue) {
      console.log('stop tracking 3', prevSlugValue, slugValue);
      return;
    }
    setSlugValue(kebabCase(trackingFieldValue));
  }, [trackingFieldValue]);

  return (
    <div style={{ marginBottom: '1rem' }}>
      <TextInput
        path="slug"
        label="Slug"
        description={slugValue ? `Auto generated based on ${trackingField}` : `Will be auto-generated from ${trackingField} when save`}
        value={slugValue}
        onChange={(e: any) => {
          setSlugValue(e.target.value);
          stopTrackingRef.current = true;
        }}
      />
    </div>
  );
}
