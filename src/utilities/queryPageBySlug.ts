import React, { cache } from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
export const queryPageBySlug = cache(
  async ({ lang, slug }: { lang: 'uk' | 'en' | undefined; slug: string }) => {
    const payload = await getPayload({ config: configPromise })

    const {
      docs: [page],
    } = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: slug,
        },
      },
      locale: lang,
    })
    return page || null
  },
)
