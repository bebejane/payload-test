import { Field } from 'payload';
import { merge } from 'lodash-es';

type Slug = (
  options?: { trackingField?: string },
  overrides?: Partial<Field>
) => Field;

// By dynamically building fields in code configurations are reusable and concise
export const slug: Slug = ({ trackingField = 'title' } = {}, overrides) =>
  merge<Field, Partial<Field> | undefined>(
    {
      name: 'slug',
      unique: true,
      type: 'text',
      admin: {
        position: 'sidebar',
        components: {
          Field: `/collections/fields/slug/SlugInput`,
        }
      },
    },
    overrides
  );
