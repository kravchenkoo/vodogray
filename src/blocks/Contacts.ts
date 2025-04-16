import type { Block } from 'payload'

export const Contacts: Block = {
  slug: 'contacts',
  fields: [
    {
      name: 'phone',
      type: 'group',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'workSchedule',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          localized: true,
        },
        {
          name: 'workTime',
          type: 'group',
          fields: [
            {
              name: 'monday',
              type: 'text',
            },
            {
              name: 'tuesday',
              type: 'text',
            },
            {
              name: 'wednesday',
              type: 'text',
            },
            {
              name: 'thursday',
              type: 'text',
            },
            {
              name: 'friday',
              type: 'text',
            },
            {
              name: 'saturday',
              type: 'text',
            },
            {
              name: 'sunday',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'address',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'routeButton',
      type: 'group',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
