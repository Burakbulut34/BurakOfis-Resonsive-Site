import React, { useState, useEffect, useRef } from "react";
import "../styles/slider.css";

const slides = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dazvkvpch/image/upload/v1755621431/bofis-image1.webp",
    title: "Sanal Ofis",
    description: "İş yapmak için asıl ihtiyacınız fiziki bir ofis değilse, sanal ofistir.",
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dazvkvpch/image/upload/v1755621431/bofis-image1.webp",
    title: "Hazır Ofis",
    description: "Modern ve fonksiyonel mobilyalarla dekore edilmiş, farklı m2’lerde, size özel, kapalı ofis alanlarıdır.",
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/dazvkvpch/image/upload/v1755621431/bofis-image1.webp",
    title: "Toplantı Odası",
    description: "eOfis Toplantı Salonlarımız, Türkiye’de 13 şehirde 55 lokasyonda kolaylıkla ulaşabileceğiniz, merkezi bölgelerde yer almaktadır.",
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/dazvkvpch/image/upload/v1755621431/bofis-image1.webp",
    title: "Paylaşımlı Ofis (Ortak Ofis)",
    description: "Farklı sektörlerden profesyonellerle çalışarak, ortak ofis ortamında çalışma masası ve sekreterlik hizmeti yeterlidir diyenler için en uygun çözüm Coworking."
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef();

  useEffect(() => {
    startSlideTimer();
    return () => stopSlideTimer();
  }, [currentIndex]);

  const startSlideTimer = () => {
    stopSlideTimer();
    slideInterval.current = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 2000);
  };

  const stopSlideTimer = () => {
    if (slideInterval.current) clearInterval(slideInterval.current);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container" onMouseEnter={stopSlideTimer} onMouseLeave={startSlideTimer}>
      {/* Slider */}
      <div className="slider-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map(({ id, image, title, description }) => (
          <div className="slide" key={id}>
            <img src={image} alt={title} className="slide-image" />
            <div className="overlay"></div>
            <div className="slider-text">
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="dots">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Cards */}
      <div className="cards">
       {slides.map((item) => (
        <div key={item.id} className="card">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Slider;
