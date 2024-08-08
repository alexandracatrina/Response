import React from 'react';
import './Header.css';
import HeaderTop from './Header';
import HeaderNav from './HeaderNav';

function Header() {
  return (
    <header className="header">
      <HeaderTop />
      <HeaderNav />
    </header>
  );
}

export default Header;
