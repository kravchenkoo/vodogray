'use client';

function ClickOutside() {
  function closeMobileMenu() {
    const body = document.querySelector('body');
    body?.classList.remove('menuOpened');
    body?.classList.add('menuClosed');
    console.log('close');
  }
  return <div className="clickOutside" onClick={() => closeMobileMenu()}></div>;
}

export default ClickOutside;
