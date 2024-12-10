import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Destinations from "../components/Destinations";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
import img from "../assets/home.jpg";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        // M-1 for add image 
        // heroImg="https://images.unsplash.com/photo-1491166617655-0723a0999cfc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // M-2 for adding image
        heroImg={img}
        title="Journey With Story"
        text="Choose Your Destination"
        btntxt="Travel Plan"
        url="./"
        btnclass="show"
      />
      <Destinations />
      <Trip />
      <Footer />

      {/* <h1> this is </h1> */}
    </>
  );
}

export default Home;
