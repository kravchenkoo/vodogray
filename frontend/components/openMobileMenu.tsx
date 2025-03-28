'use client';

function OpenMobileMenu() {
  function openMobileMenu() {
    const body = document.querySelector('body');
    body?.classList.remove('menuClosed');
    body?.classList.add('menuOpened');
  }

  return (
    <button
      id="nav-hamburger-open"
      onClick={() => openMobileMenu()}
      className={`md:hidden`}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}

export default OpenMobileMenu;
