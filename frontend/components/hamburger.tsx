'use client';
import { useState, useEffect } from 'react';
function Hamburger() {
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    const body = document.querySelector('body');

    if (isOpen) {
      body?.classList.remove('menuClosed');
      body?.classList.add('menuOpened');
    } else {
      body?.classList.remove('menuOpened');
      body?.classList.add('menuClosed');
    }
  }, [isOpen]);
  return (
    <button
      id="nav-icon1"
      onClick={() => setOpen(!isOpen)}
      className={`md:hidden ${isOpen ? 'open' : ''}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}

export default Hamburger;
