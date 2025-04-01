'use client';
import Link from 'next/link';
import {
  HiOutlineListBullet,
  HiOutlinePhone,
  HiOutlineHome,
} from 'react-icons/hi2';
import { usePathname } from 'next/navigation';

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

function MainNav({ lang, dict }: Props) {
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
            <span>{dict.home.navName}</span>
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
            <span>{dict.contacts.navName}</span>
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
            <span>{dict.blog.navName}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
