import React from "react";
import "../styles/userrws.css";
const UserReviews = () =>{
    const comments = [
    {
      id: 1,
      name: "Ahmet Yılmaz",
      role: "Girişimci",
      comment:
        "Ofis hizmetlerinden çok memnun kaldım. Çalışma ortamı gerçekten profesyonel ve huzurlu.",
      image:
        "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Elif Demir",
      role: "Freelancer",
      comment:
        "Sanal ofis hizmeti ile işlerimi çok kolaylaştırdım. Güvenilir ve kaliteli bir hizmet.",
      image:
        "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "Ahmet Kaya",
      role: "Yatırımcı",
      comment:
        "Toplantı salonları çok şık ve kullanışlı. Misafirlerim her zaman etkileniyor.",
      image:
        "https://randomuser.me/api/portraits/men/45.jpg",
    },
  ];
    return(
        <div className="testimonials">
            <h2 className="title">Müşteri Yorumları</h2>
            <div className="testimonials-container">
                {comments.map(({id, name, role, comment, image})=>(
                    <div className="testimonial-card" key={id}>
                    <img src={image} alt="userws-logo" className="testimonial-img"/>
                    <h3 className="testimonial-name">{name}</h3>
                    <span className="testimonial-role">{role}</span>
                    <p className="testimonial-text">{comment}</p>
                </div>
                ))}
            </div>
        </div>
    );
};

export default UserReviews;