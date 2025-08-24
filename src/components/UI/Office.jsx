import React from "react";
import "../../styles/office.css";
import Helmet from "../Helmet/Helmet";
import { Link } from "react-router-dom";  // ✅ add

const offices = [
  {
    id: 1,
    slug:"hazir-ofis",
    title: "Hazır Ofis",
    desc: "Mobilyalı, donanımlı ve hemen kullanıma hazır ofisler.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    slug:"sanal-ofis",
    title: "Sanal Ofis",
    desc: "Prestijli iş adresi ve sekreterlik hizmetleri.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    slug:"toplanti-odasi",
    title: "Toplantı Odası",
    desc: "Tam donanımlı toplantı ve sunum odaları.",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    slug:"paylasimli-ofis",
    title: "Paylaşımlı Ofis (Ortak Ofis)",
    desc: "Ortak kullanım alanları ile ekonomik çalışma alanı.",
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80"
  }
];

export default function Office({withHelmet = false}) {
  return (
     <section className="office-section">
      {withHelmet && <Helmet title="Ofisler" />}
      <h2 className="office-title">Ofisler</h2>
      <div className="office-container">
        {offices.map((office) => (
          <div className="office-box" key={office.id}>
            <img src={office.img} alt={office.title} />
            <h3>{office.title}</h3>
            <p>{office.desc}</p>
            {/* ✅ Teklif Al -> /get-offer/slug */}
            <Link to={`/get-offer/${office.slug}`} className="offer-btn">
              Teklif Al
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
