import React from "react";


import Slider from "./Slider";
//import OfficeCard from "../components/UI/Office";
import Helmet from "../components/Helmet/Helmet";
import AboutUs from "../components/UI/About";
import OfficeServices from "../components/UI/OfficeServices";
import Contact from "../components/UI/Contact";
import UserReviews from "./UserRws";

const Home = ()=>{
    return(
    <>
        <Helmet title="Anasayfa" />
        <Slider/>
        <AboutUs/>
         <OfficeServices/>
         <UserReviews/>
         <Contact/>
       
    </>
    );
};

export default Home;