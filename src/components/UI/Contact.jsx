import React from "react";
import "../../styles/contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Helmet from "../Helmet/Helmet";

const Contact = ({withHelmet = false}) => {
  return (
    <section className="contact-section">
        {withHelmet && <Helmet title="İletişim" />}
      <div className="container">
        <div className="section-header">
          <h2>İletişim</h2>
          <p>
            Aşağıdaki formu kullanarak bize kolayca ulaşabilirsiniz. 
            Dilerseniz telefon veya e-posta yoluyla da bizimle iletişim kurabilirsiniz.
          </p>
        </div>

        <div className="row">
          {/* İletişim Bilgileri */}
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-info-content">
                <h4>Adres</h4>
                <p>İstanbul / Türkiye</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <FaPhoneAlt />
              </div>
              <div className="contact-info-content">
                <h4>Telefon</h4>
                <p>+90 555 123 45 67</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <FaEnvelope />
              </div>
              <div className="contact-info-content">
                <h4>E-posta</h4>
                <p>info@ornekmail.com</p>
              </div>
            </div>
          </div>

          {/* İletişim Formu */}
          <div className="contact-form">
            <h2>Mesaj Gönder</h2>
            <form action="https://formcarry.com/s/vSxkDqPgX_T" method="post">
              <div className="input-box">
                <input type="text" required  name="Ad - Soyad"/>
                <span>Ad Soyad</span>
              </div>
              <div className="input-box">
                <input type="email" required  name="E-posta"/>
                <span>E-posta</span>
              </div>
              <div className="input-box">
                <textarea required name="Mesaj"></textarea>
                <span>Mesajınızı yazın...</span>
              </div>
              <div className="input-box">
                <input type="submit" value="Gönder" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
