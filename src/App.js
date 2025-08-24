import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import OfficeCard from "./components/UI/Office";
import AboutUs from "./components/UI/About";
import OfficeServices from "./components/UI/OfficeServices";
import Footer from "./components/Footer/Footer";
import Contact from "./components/UI/Contact"
import Login from "./components/UI/Login";
import Register from "./components/UI/Register";
import GetOffer from "./components/UI/GetOffer";
import ForgotPassword from "./components/UI/ForgotPassword";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/office" element={<OfficeCard  withHelmet={true}/>} />
        <Route path="/office-services" element={<OfficeServices  withHelmet={true}/>} />
        <Route path="/aboutus" element={<AboutUs withHelmet={true} />} />
        <Route path="/contact" element={<Contact withHelmet={true} />} />
        <Route path="/login" element={<Login withHelmet={true} />} />
        <Route path="/register" element={<Register withHelmet={true} />} />
        <Route path="/get-offer/:slug" element={<GetOffer withHelmet={true} />} />
        <Route path="/forgot-password" element={<ForgotPassword withHelmet={true} />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
