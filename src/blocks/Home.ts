import type { Block } from 'payload'
import {
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  EXPERIMENTAL_TableFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
export const Home: Block = {
  slug: 'home',
  fields: [
    {
      name: 'callUsButton',
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
      name: 'tableDiscount',
      type: 'group',
      fields: [
        {
          name: 'tableHeader',
          type: 'text',
          localized: true,
        },
        {
          name: 'table',
          type: 'richText',
          required: true,
          localized: true,
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [
                ...rootFeatures,
                HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                FixedToolbarFeature(),
                InlineToolbarFeature(),
                HorizontalRuleFeature(),
                EXPERIMENTAL_TableFeature(),
              ]
            },
          }),
        },
      ],
    },
    {
      name: 'tableRegular',
      type: 'group',
      fields: [
        {
          name: 'table',
          type: 'richText',
          required: true,
          localized: true,
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [
                ...rootFeatures,
                HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                FixedToolbarFeature(),
                InlineToolbarFeature(),
                HorizontalRuleFeature(),
                EXPERIMENTAL_TableFeature(),
              ]
            },
          }),
        },
      ],
    },
    {
      name: 'rules',
      type: 'richText',
      localized: true,
      editor: lexicalEditor(),
    },
  ],
}
