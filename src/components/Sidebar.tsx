import MainNav from '@/components/MainNav'
import Logo from '@/components/Logo'
import CloseMobileMenu from './CloseMobileMenu'
import { DictionariesType } from '@/dictionaries/dictionariesType'

type Props = {
  lang: string
  dict: DictionariesType
}

function Sidebar({ lang, dict }: Props) {
  return (
    <aside className="aside row-[1_/_-1] bg-gray-0 p-[3.2rem_2.4rem] border-r grid-row border-r-gray-100 border-solid hidden md:block">
      <CloseMobileMenu />
      <Logo lang={lang} />
      <MainNav dict={dict} lang={lang} />
    </aside>
  )
}

export default Sidebar
