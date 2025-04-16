'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

function CloseMobileMenu() {
  const pathName = usePathname();
  function closeMobileMenu() {
    const body = document.querySelector('body');
    body?.classList.remove('menuOpened');
    body?.classList.add('menuClosed');
  }

  // close mobile menu on route change
  useEffect(() => {
    closeMobileMenu();
  }, [pathName]);
  return (
    <button
      id="nav-hamburger-close"
      onClick={() => closeMobileMenu()}
      className={`md:hidden`}
    >
      <span></span>
      <span></span>
    </button>
  );
}

export default CloseMobileMenu;
