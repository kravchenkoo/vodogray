import { Home } from '@/blocks/Home'
import { Contacts } from '@/blocks/Contacts'
import { CollectionConfig } from 'payload'
import { Rules } from '@/blocks/Rules'

export const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'description',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
    },
    {
      name: 'layout',
      type: 'blocks',
      required: true,
      blocks: [Home, Contacts, Rules],
    },
  ],
}
