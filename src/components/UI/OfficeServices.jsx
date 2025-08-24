import React from "react";
import "../../styles/office-services.css"
import Helmet from "../Helmet/Helmet";
// Kaydet: OfficeServices.jsx (JSX)
import { Link } from "react-router-dom";
// Not: Aşağıdaki <style> bloğunu ayrı .css dosyasına taşımak istersen
// office-services.css olarak kaydedip bu dosyada import edebilirsin.

export default function OfficeServices({ withHelmet = false }) {
  const features = [
    { name: "Çalışma Saatleri", value: "09:00 – 18:00", icon: SvgClock },
    { name: "7/24 Güvenlik", value: "Kameralı & kartlı erişim", icon: SvgShield },
    { name: "Ücretsiz İnternet", value: "Hızlı ve stabil Wi‑Fi", icon: SvgWifi },
    { name: "Sınırsız Çay‑Kahve", value: "Sıcak içecek ikramı", icon: SvgCup },
    { name: "Temizlik", value: "Düzenli profesyonel ekip", icon: SvgSparkle },
    { name: "Resepsiyon", value: "Karşılama & çağrı hizmeti", icon: SvgBell },
    { name: "Kartlı Giriş", value: "Güvenli erişim kontrolü", icon: SvgCard },
    { name: "Fotokopi‑Fax‑Yazıcı", value: "Paylaşımlı ofis cihazları", icon: SvgPrinter },
    { name: "Mutfak", value: "Ortak kullanımlı mutfak", icon: SvgKitchen },
    { name: "Klima", value: "Konforlu iklimlendirme", icon: SvgSnow },
    { name: "Teras", value: "Açık alan dinlenme", icon: SvgSun },
    { name: "Otopark", value: "Araç park imkânı", icon: SvgParking },
  ];

  const services = [
    {
      title: "Mobilyalı Hazır Ofisler",
      slug: "mobilyali-hazir-ofis",
      desc: "Anahtar teslim, tamamen döşeli özel ofisler. İnternet, temizlik ve resepsiyon dahil.",
      perks: ["1‑10 kişilik", "Gizlilik", "Faturalandırma"],
      icon: SvgOffice,
      cta: "Teklif Al",
    },
    {
      title: "Ortak Ofis (Coworking)",
      slug: "ortak-ofis",
      desc: "Esnek veya sabit masa seçenekleri ile topluluk içinde verimli çalışma.",
      perks: ["Günlük/Aylık", "Topluluk etkinlikleri", "Sınırsız içecek"],
      icon: SvgCowork,
      cta: "Teklif Al",
    },
    {
      title: "Toplantı Salonları",
      slug: "toplanti-salon",
      desc: "Saatlik kiralanabilir modern toplantı odaları. Ekran, beyaz tahta ve ikram hazır.",
      perks: ["4‑20 kişi", "Ekran & sunum", "Saatlik plan"],
      icon: SvgMeeting,
      cta: "Teklif Al",
    },
    {
      title: "Lounge",
      slug: "lounge",
      desc: "Rahat koltuklar, hızlı Wi‑Fi ve odak/sohbet alanlarıyla esnek dinlenme bölümü.",
      perks: ["Rahat oturma", "Sessiz köşeler", "Topluluk"],
      icon: SvgLounge,
      cta: "Teklif Al",
    },
  ];

  return (
    <div className="osv-root">
      {withHelmet && <Helmet title="Ofis Hizmetleri" />}
      {/* SERVICES */}
      <section id="services" className="osv-section">
        <div className="osv-container">
          <h3 className="osv-section-title"><center>Ofis Servisleri</center></h3>
          <div className="osv-grid">
            {services.map((s) => (
              <article key={s.title} className="osv-card">
                <div className="osv-card-icon">{s.icon()}</div>
                <h4>{s.title}</h4>
                <p className="osv-muted">{s.desc}</p>
                <ul className="osv-perks">
                  {s.perks.map((p) => (<li key={p}>{p}</li>))}
                </ul>
                <div className="osv-card-actions">
                  {/* ✅ Dinamik slug ile yönlendirme */}
                  <Link to={`/get-offer/${s.slug}`} className="osv-btn osv-btn--sm links">
                    {s.cta}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="osv-section osv-section--alt">
        <div className="osv-container">
          <h3 className="osv-section-title"><center>Sunulan İmkânlar</center></h3>
          <div className="osv-features">
            {features.map((f) => (
              <div key={f.name} className="osv-feature-item">
                <div className="osv-feature-icon">{f.icon()}</div>
                <div className="osv-feature-text">
                  <strong>{f.name}</strong>
                  <span>{f.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
      );
      };
    




/* ========= Icons ========= */
function SvgClock(){return(<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2" strokeLinecap="round"/></svg>);} 
function SvgShield(){return(<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" xmlns="http://www.w3.org/2000/svg"><path d="M12 3l8 3v6c0 4.5-3 7.5-8 9-5-1.5-8-4.5-8-9V6l8-3Z"/></svg>);} 
function SvgWifi(){return(<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" xmlns="http://www.w3.org/2000/svg"><path d="M3 9a14 14 0 0 1 18 0"/><path d="M6 12a10 10 0 0 1 12 0"/><path d="M9 15a6 6 0 0 1 6 0"/><circle cx="12" cy="18" r="1"/></svg>);} 
function SvgCup(){return(<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="7" width="10" height="10" rx="3"/><path d="M15 9h3a2 2 0 0 1 0 4h-3"/></svg>);} 
function SvgSparkle(){return(<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" xmlns="http://www.w3.org/2000/svg"><path d="M12 3l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4Z"/></svg>);} 
function SvgBell(){return(<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" xmlns="http://www.w3.org/2000/svg"><path d="M6 8a6 6 0 1 1 12 0c0 7 3 7 3 7H3s3 0 3-7"/><path d="M10 21a2 2 0 0 0 4 0"/></svg>);} 
function SvgCard(){return(<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3 10h18"/></svg>);} 
function SvgPrinter(){return(<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="3" width="12" height="6" rx="2"/><rect x="6" y="15" width="12" height="6" rx="2"/><rect x="3" y="9" width="18" height="8" rx="2"/></svg>);} 
function SvgKitchen(){return(<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="3" width="16" height="10" rx="2"/><rect x="4" y="15" width="16" height="6" rx="2"/></svg>);} 
function SvgSnow(){return(<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20M4 6l16 12M4 18L20 6" strokeLinecap="round"/></svg>);} 
function SvgSun(){return(<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.6 4.6l2.1 2.1M17.3 17.3l2.1 2.1M4.6 19.4l2.1-2.1M17.3 6.7l2.1-2.1"/></svg>);} 
function SvgParking(){return(<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="3" width="12" height="18" rx="2"/><path d="M9 8h4a3 3 0 1 1 0 6H9V8z"/></svg>);} 
function SvgOffice(){return(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="8" height="18" rx="2"/><rect x="13" y="7" width="8" height="14" rx="2"/><path d="M7 7H7.01M7 11H7.01M7 15H7.01M17 11H17.01M17 15H17.01" strokeLinecap="round"/></svg>);} 
function SvgCowork(){return(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/><circle cx="16" cy="8" r="3"/><path d="M3 19c1.5-3 5-4 8-4s6.5 1 8 4" strokeLinecap="round"/></svg>);} 
function SvgMeeting(){return(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="5" width="14" height="10" rx="2"/><path d="M17 9l4-2v8l-4-2v-4z" strokeLinejoin="round"/><path d="M7 19h6" strokeLinecap="round"/></svg>);} 
function SvgLounge(){return(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="10" width="18" height="7" rx="3"/><path d="M6 10V7a3 3 0 0 1 6 0v3"/></svg>);}