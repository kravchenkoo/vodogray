import MainNav from '@/components/mainNav';
import Logo from '@/components/logo';

type Props = {
  lang?: string;
};

function Sidebar({ lang }: Props) {
  return (
    <aside className="aside row-[1_/_-1] bg-gray-0 p-[3.2rem_2.4rem] border-r grid-row border-r-gray-100 border-solid hidden md:block">
      <Logo />
      <MainNav lang={lang} />
      {/* <Uploader /> */}
    </aside>
  );
}

export default Sidebar;
