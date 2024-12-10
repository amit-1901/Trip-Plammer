import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/about.jpg";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-about"
        heroImg={AboutImg}
        title="About"
        // text="choose destination"
        // btntxt="Travel Plan"
        // url="/"
        btnclass="hide"
      />
      <AboutUs />
      <Footer />
      {/* <h1> This is About </h1> */}
    </>
  );
}

export default About;
