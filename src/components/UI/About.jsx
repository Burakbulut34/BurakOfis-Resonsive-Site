import React from "react";
import "../../styles/aboutus.css";
import officeImage from "../../assets/images/about-us.png"; // resmi assets klasörüne eklemeyi unutma
import Helmet from "../Helmet/Helmet";

const AboutUs = ({ withHelmet = false }) => {
  return (
   <div className="about-container">
      {withHelmet && <Helmet title="Hakkımızda" />}

      <div className="about-image">
        <img src={officeImage} alt="Ofis Görseli" />
      </div>
      <div className="about-content">
        <h2>Hakkımızda</h2>
        <p>
          Burak Ofis olarak modern ve yenilikçi ofis çözümleri sunuyoruz. Uygun
          fiyatlı, merkezi konumlu ve tam donanımlı ofislerimiz ile girişimcilere
          ve profesyonellere çalışma alanları sağlıyoruz. Misyonumuz, iş
          dünyasının değişen ihtiyaçlarına pratik ve esnek çözümler üretmek.
        </p>
        <p>
          Müşteri memnuniyetini ön planda tutan yaklaşımımızla, konforlu ve
          profesyonel bir çalışma ortamı sunuyoruz. Gelin, sizin için en uygun
          ofis alanını birlikte planlayalım!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
