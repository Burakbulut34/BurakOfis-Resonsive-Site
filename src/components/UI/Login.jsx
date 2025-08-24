import React from "react";
import "../../styles/login.css"; // CSS buradan gelecek
import Helmet from "../Helmet/Helmet";
import {FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

const Login = ({withHelmet = false}) => {
  return (
    <div className="login-page">
        {withHelmet && <Helmet title="Giriş Yap" />}
      <div className="login-card">
        <h2 className="title">
          Tekrar <span>Hoşgeldiniz</span>
        </h2>
        <p className="subtitle">Hesabınıza giriş yapın</p>

        <form>
         
          <div className="input-group">
            <p>E-posta</p>
            <input type="email" placeholder="E-postanızı girin" required />
          </div>

          <div className="input-group">
            <p>Şifre</p>
            <input type="password" placeholder="Şifrenizi girin" required />
          </div>

          <div className="options">
            <label>
              <input type="checkbox" /> Beni hatırla
            </label>
            <div className="forgot-pass">
              <a href="/forgot-password">Şifrenizi mi unuttunuz?</a>
            </div>
          </div>

          <button type="submit" className="btn-login">
            GİRİŞ YAP
          </button>
        </form>

        <p className="or-text">Veya şununla giriş yapın</p>
        <div className="social-login">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaGoogle /></a>
          <a href="#"><FaTwitter /></a>
        </div>

        <p className="register">
          Hesabınız yok mu? <a href="/register">Kayıt Ol</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
