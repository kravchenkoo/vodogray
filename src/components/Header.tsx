import { getPayload } from 'payload'
import { queryPageBySlug } from '@/utilities/queryPageBySlug'
import config from '@/payload.config'
import LocaleSwitcher from '@/components/LocaleSwitcher'
import OpenMobileMenu from './OpenMobileMenu'
import { HiOutlinePhone } from 'react-icons/hi2'
import { Page } from '@/payload-types'
type Props = {
  lang: 'uk' | 'en' | undefined
}

type ContactsBlock = Extract<Page['layout'][number], { blockType: 'contacts' }>

async function Header({ lang }: Props) {
  const page = await queryPageBySlug({ lang, slug: 'contacts' })
  const { phone } = page.layout[0] as ContactsBlock

  return (
    <header className="overflow-hidden md:p-[1.2rem_4.8rem] p-[1.2rem_1rem] border-b border-b-gray-100  bg-gray-0">
      <div className="menuButtons flex gap-[2.4rem] items-center content-end">
        <OpenMobileMenu />
        <div className="buttons-group ml-[auto] flex gap-[2.4rem] items-center content-end">
          <a href={`tel:${phone.url}`} className="block text-gray-600">
            <HiOutlinePhone className="w-[24px] h-[24px]" />
          </a>
          <LocaleSwitcher lang={lang} />
        </div>
      </div>
    </header>
  )
}

export default Header
