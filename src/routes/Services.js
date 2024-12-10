import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServicesImg from "../assets/services.jpg";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Services() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-about"
        heroImg={ServicesImg}
        title="Services"
        btnclass="hide"
      />
      <Trip />
      <Footer />
      {/* <h1> This is Services </h1> */}
    </>
  );
}

export default Services;
