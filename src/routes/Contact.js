import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContactImg from "../assets/contact.jpg";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-about"
        heroImg={ContactImg}
        title="Contact"
        btnclass="hide"
      />
      <ContactForm />
      <Footer />
      {/* <h1> This is Services </h1> */}
    </>
  );
}

export default Contact;
