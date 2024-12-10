import "./styles.css";
// import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Services from "./routes/Services";
import Contact from "./routes/Contact";
import TermsAndConditions from './license/TermsAndConditions';
import PrivacyPolicy from './license/PrivacyPolicy';
import LicenseAgreement from './license/LicenseAgreement';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        {/* for adding the tnc privacy and policy pages */}
        <Route path="/termsAndConditions" element={<TermsAndConditions />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />      
        <Route path="/licenseAgreement" element={<LicenseAgreement />} />      
      </Routes>

      {/* <Navbar /> */}
    </div>
  );
}
