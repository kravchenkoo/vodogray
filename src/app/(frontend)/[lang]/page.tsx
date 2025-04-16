import { Page } from '@/payload-types'
import { queryPageBySlug } from '@/utilities/queryPageBySlug'
import MainPage from '@/components/MainPage'

type Props = {
  params: Promise<{ lang: 'uk' | 'en' | undefined }>
}

export async function generateMetadata({ params }: Props) {
  const { lang } = await params
  const page = await queryPageBySlug({ lang, slug: 'home' })
  return {
    title: page.title,
    description: page.description,
  }
}

export default async function Home({ params }: Props) {
  const { lang } = await params
  const page = await queryPageBySlug({ lang, slug: 'home' })
  const renderBlock = (block: Page['layout'][0]) => {
    switch (block.blockType) {
      case 'home':
        return <MainPage block={block} key={block.id} />
      default:
        return null
    }
  }
  return (
    <div className="flex flex-col gap-16">{page.layout.map((block) => renderBlock(block))}</div>
  )
}
