'use client';
import Link from 'next/link';
import {
  HiOutlineListBullet,
  HiOutlinePhone,
  HiOutlineHome,
} from 'react-icons/hi2';
import { usePathname } from 'next/navigation';

type Props = {
  lang?: string;
};

function MainNav({ lang }: Props) {
  const pathName = usePathname();
  const segments = pathName.split('/');
  const lastUrlSegment = segments.slice(-1);

  return (
    <nav className="mt-16">
      <ul className="flex flex-col gap-[0.8rem]">
        <li>
          <Link
            href={`/${lang}/`}
            className={`navLink ${
              lastUrlSegment[0] === '' || lastUrlSegment[0] === 'en'
                ? 'active'
                : ''
            }`}
          >
            <HiOutlineHome />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link
            href={`/${lang}/contacts`}
            className={`navLink ${
              lastUrlSegment[0] === 'contacts' ? 'active' : ''
            }`}
          >
            <HiOutlinePhone />
            <span>Contacts</span>
          </Link>
        </li>
        <li>
          <Link
            href={`/${lang}/blog`}
            className={`navLink ${
              lastUrlSegment[0] === 'blog' ? 'active' : ''
            }`}
          >
            <HiOutlineListBullet />
            <span>Blog</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
