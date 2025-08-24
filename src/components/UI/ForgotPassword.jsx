import React, {useState} from "react";
import "../../styles/forgot-password.css";
import { FaLeaf } from "react-icons/fa";
import Helmet from "../Helmet/Helmet";

const ForgotPassword = ({withHelmet = false}) =>{
    const [email, setEmail] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!email)
        {
            alert("Lütfen e-posta adresinizi girin!");
            return;
        }
        alert(`Şifre sıfırlama bağlantısı '${email}' adresine gönderildi.`);
        console.log(email);
        setEmail("");
    };

    return(
        <div className="forgot-container">
            {withHelmet && <Helmet title="Şifremi Unuttum" />}
          <div className="forgot-box">
            <h2>Şifremi Unuttum</h2>
            <p>Lütfen kayıtlı e-posta adresinizi girin. Şifre sıfırlama bağlantısı gönderilecektir.</p>
            <form action="" onSubmit={handleSubmit}>
                <div className="input-group">
                    <input
                    type="email"
                    placeholder="E-posta Adresiniz"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit" className="forgot-btn">
                      Gönder
                    </button>
                </div>
            </form>
            <a href="/login" className="back-login">
            Giriş sayfasına dön
            </a>
            </div>      
        </div>
    );
};

export default ForgotPassword;