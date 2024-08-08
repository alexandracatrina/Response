import logo from '../img/logo.png';
import profileIcon from '../img/profile-icon.png';
import './Header.css';
import React, { useState } from 'react';

const Header = () => {
  const [showAuthPopup, setShowAuthPopup] = useState(false);

  const toggleAuthPopup = () => {
    setShowAuthPopup(!showAuthPopup);
  };

  return (
    <div className="header-top">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="search-container">
        <input type="text" placeholder="Căutare" />
      </div>
      <div className="auth" >

        <img src={profileIcon} alt="Profile" onClick = {toggleAuthPopup} />
        {showAuthPopup && (
          <div className="auth-popup">
            <form>
              <label>Email</label>
              <input type="email" name="email" />
              <label>Parolă</label>
              <input type="password" name="password" />
              <div className="remember-me">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Ține-mă minte</label>
              </div>
              <button type="submit">Conectare</button>
              <a href="#">Ai uitat parola?</a>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
