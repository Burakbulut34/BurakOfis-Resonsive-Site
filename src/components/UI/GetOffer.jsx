import React, {useState} from "react";
import { useParams } from "react-router-dom";
import "../../styles/get-offer.css";
import Helmet from "../Helmet/Helmet";


const GetOffer = ({ withHelmet = false }) =>{
      const { slug } = useParams(); // URL’den slug yakalıyoruz
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // slug + form bilgileri gönderilecek
    const payload = {
      ...formData,
      offerSlug: slug, // Slug bilgisini de ekledik
    };

    console.log("Gönderilecek Data:", payload);

    // Burada mail API’nize POST atabilirsiniz
    // fetch("/api/sendMail", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(payload),
    // });
  };

    return(
        
        <div className="offer-container">
            {withHelmet && <Helmet title="Teklif Al" />}
            <div className="offer-box">
                <h2> {(slug === "toplanti-salonlari" || slug === "lounge") ? "Kirala" : "Teklif Al"} - {slug}</h2>
                <p>İhtiyacınız bize iletin, size en kısa sürede dönüş yapalım.</p>
               <form 
              action="https://formcarry.com/s/ExKMfqcMeaJ" 
              method="post" 
              className="offer-form"
            >
              <div className="form-group">
                <label>Ad Soyad</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Adınız"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>E-posta</label>
                <input
                  type="email"
                  name="email"
                  placeholder="E-posta"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Telefon</label>
                <input type="tel" placeholder="05xx xxxx xx xx" name="Telefon" />
              </div>

              <div className="form-group">
                <label>Mesajınız</label>
                <textarea
                  name="message"
                  placeholder="Mesajınız"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* ✅ Slug'ı gizli input olarak ekledik */}
              <input type="hidden" name="offerSlug" value={slug} />

              <button type="submit" className="btn-submit">Teklif Al</button>
            </form>
x
            </div>
        </div>
    );
};

export default GetOffer;
