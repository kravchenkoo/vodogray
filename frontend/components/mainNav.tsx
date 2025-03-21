import Link from 'next/link';
import { HiOutlinePhone, HiOutlineHome } from 'react-icons/hi2';

type Props = {
  lang?: string;
};

function MainNav({ lang }: Props) {
  return (
    <nav className="mt-16">
      <ul className="flex flex-col gap-[0.8rem]">
        <li>
          <Link href={`/${lang}/`} className="navLink">
            <HiOutlineHome />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href={`/${lang}/contacts`} className="navLink">
            <HiOutlinePhone />
            <span>Contacts</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
