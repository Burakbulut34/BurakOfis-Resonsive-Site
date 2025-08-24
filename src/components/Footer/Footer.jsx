import React from "react";
import "./footer.css";
import Logo from "../../assets/images/burakofis.png";
import { FaFacebookF, FaTwitter, FaGithub, FaInstagram, FaPaperPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About */}
        <div className="footer-section about">
          <img src={Logo} alt="Site Logo" className="footer-logo" />
          <p>
            BurakOfis; modern ofis, sanal ofis ve turizm alanında yenilikçi
            çözümler sunan bir şirkettir. Müşterilerimize güvenilir, hızlı
            ve kaliteli hizmetler sağlıyoruz.
          </p>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h4>Servisler</h4>
          <ul>
            <li><a href="#">Web Site</a></li>
            <li><a href="#">Domain & Hosting Hizmetleri</a></li>
            <li><a href="#">Ceo Optimizasyonu</a></li>
          </ul>
        </div>

        {/* Links */}
        <div className="footer-section">
          <h4>Hızlı Bağlantılar</h4>
          <ul>
            <li><a href="/">Anasayfa</a></li>
            <li><a href="/office">Ofisler</a></li>
            <li><a href="/office-services">Ofis Hizmetleri</a></li>
            <li><a href="/aboutus">Hakkımızda</a></li>
            <li><a href="/contact">İletişim</a></li>
          </ul>
        </div>

        {/* Subscribe */}
        <div className="footer-section">
          <h4>İletişime Geçin</h4>
          <form className="subscribe">
            <input 
              type="text" 
              className="subscribe-input" 
              placeholder="Adınız" 
            />
            <button type="submit" className="subscribe-btn">
              <FaPaperPlane />
            </button>
          </form>

          {/* Social */}
          <div className="social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaGithub /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Telif hakkı © {new Date().getFullYear()} <a href="/">BurakOfis</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
