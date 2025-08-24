import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <header className="navbar">
      {/* Logo */}
      <h1 className="logo">BurakOfis</h1>

      {/* Menü */}
      <ul
        className={isMobile ? "nav-links nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <li>
          <Link to="/">Anasayfa</Link>
        </li>
        <li>
          <Link to="/office">Ofisler</Link>
        </li>
        <li>
          <Link to="/office-services">Ofis Hizmetleri</Link>
        </li>
         <li>
          <Link to="/aboutus">Hakkımızda</Link>
        </li>
        <li>
          <Link to="/contact">İletişim</Link>
        </li>
        <li>
          <Link to="/login" className="btn-signup" id="btn-login">
            Giriş Yap
          </Link>
          <Link to="/register" className="btn-signup">
            Kayıt Ol
          </Link>
        </li>
      </ul>

      {/* Mobil Menü Butonu */}
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
    </header>
  );
};

export default Navbar;
