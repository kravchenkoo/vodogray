import { queryPageBySlug } from '@/utilities/queryPageBySlug'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { Page } from '@/payload-types'

type Props = {
  params: Promise<{ lang: 'uk' | 'en' | undefined }>
}

export async function generateMetadata({ params }: Props) {
  const { lang } = await params
  const page = await queryPageBySlug({ lang, slug: 'rules' })
  return {
    title: page.title,
    description: page.description,
  }
}

export default async function Blog({ params }: Readonly<Props>) {
  const { lang } = await params
  const page = await queryPageBySlug({ lang, slug: 'rules' })

  const rulesBlock = page.layout[0] as Extract<Page['layout'][number], { blockType: 'rules' }>

  return (
    <RichText
      className="flex flex-col gap-16 rulesText pl-[1rem] md:pl-0"
      data={rulesBlock.rules}
    />
  )
}
