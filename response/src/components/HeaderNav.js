import logo from '../img/logo.png';
import profileIcon from '../img/profile-icon.png';
import './HeaderNav.css';
import React, { useState } from 'react';

const HeaderNav = () => {
    return (
        <nav className="header-nav">
          <a href="#">Harta proiecte</a>
          <a href="#">Listă proiecte</a>
          <a href="#">Căutare proiect</a>
          <a href="#">Localizare</a>
        </nav>
      );
    }
    
    export default HeaderNav;