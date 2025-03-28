import LocaleSwitcher from '@/components/locale-switcher';
import OpenMobileMenu from './openMobileMenu';
type Props = {
  lang?: string;
};

async function Header({ lang }: Props) {
  return (
    <header className="overflow-hidden md:p-[1.2rem_4.8rem] p-[1.2rem_1.8rem] border-b border-b-gray-100  bg-gray-0">
      <div className="menuButtons flex gap-[2.4rem] items-center content-end">
        <OpenMobileMenu />
        <LocaleSwitcher lang={lang} />
      </div>
    </header>
  );
}

export default Header;
