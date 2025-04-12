import LocaleSwitcher from '@/components/locale-switcher';
import OpenMobileMenu from './openMobileMenu';
import { HiOutlinePhone } from 'react-icons/hi2';
type Props = {
  lang?: string;
};

async function Header({ lang }: Props) {
  const phoneNumberUrl = '380637886444';
  return (
    <header className="overflow-hidden md:p-[1.2rem_4.8rem] p-[1.2rem_1rem] border-b border-b-gray-100  bg-gray-0">
      <div className="menuButtons flex gap-[2.4rem] items-center content-end">
        <OpenMobileMenu />
        <div className="buttons-group ml-[auto] flex gap-[2.4rem] items-center content-end">
          <a href={`tel:${phoneNumberUrl}`} className="block text-gray-600">
            <HiOutlinePhone className="w-[24px] h-[24px]" />
          </a>
          <LocaleSwitcher lang={lang} />
        </div>
      </div>
    </header>
  );
}

export default Header;
