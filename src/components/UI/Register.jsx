import React from "react";
import "../../styles/register.css"
import {FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import Helmet from "../Helmet/Helmet";

const Register = ({withHelmet = false}) =>{
    return(
        <div className="register-page">
          {withHelmet && <Helmet title="Kayıt Ol" />}
      <div className="register-card">
        <h2 className="title">
          Hemen <span>Kayıt Ol</span>
        </h2>
        <p className="subtitle">Yeni hesabınızı oluşturun</p>

        <form>
          <div className="input-group">
            <p>Kullanıcı Adı</p>
            <input type="text" placeholder="Kullanıcı Adı" required/>
          </div>

          <div className="input-group">
           <p>E-posta</p>
            <input type="email" placeholder="E-posta adresi" required/>
          </div>

          <div className="input-group">
            <p>Şifre</p>
            <input type="password" placeholder="Şifre" required/>
          </div>

          <div className="input-group">
           <p>Tekrar Şifre</p>
            <input type="password" placeholder="Şifreyi tekrar girin" required/>
          </div>

          <button type="submit" className="btn-register">
            KAYIT OL
          </button>
        </form>

        <p className="or-text">Veya şununla kayıt olun</p>
        <div className="social-register">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaGoogle /></a>
          <a href="#"><FaTwitter /></a>
        </div>

        <p className="login">
          Zaten hesabınız var mı? <a href="/login">Giriş Yap</a>
        </p>
      </div>
    </div>
    );
};

export default Register;