import MainNav from '@/components/mainNav';
import Logo from '@/components/logo';
import CloseMobileMenu from './closeMobileMenu';

type Props = {
  lang: string;
  dict: {
    blog: {
      before: string;
      after: string;
      navName: string;
    };
    contacts: {
      navName: string;
    };
    home: {
      navName: string;
    };
  };
};

function Sidebar({ lang, dict }: Props) {
  return (
    <aside className="aside row-[1_/_-1] bg-gray-0 p-[3.2rem_2.4rem] border-r grid-row border-r-gray-100 border-solid hidden md:block">
      <CloseMobileMenu />
      <Logo />
      <MainNav dict={dict} lang={lang} />
      {/* <Uploader /> */}
    </aside>
  );
}

export default Sidebar;
