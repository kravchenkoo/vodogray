import type { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const Rules: Block = {
  slug: 'rules',
  fields: [
    {
      name: 'rules',
      type: 'richText',
      required: true,
      localized: true,
      editor: lexicalEditor(),
    },
  ],
}
