import "./FooterStyle.css";


const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Trip-Planner</h1>
          <p>Choose your Destination</p>
        </div>
        <div>
        <a href="https://www.linkedin.com/in/amit-agrahari-2b94351a0/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://www.facebook.com/amit.agrahari.190166">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="https://www.instagram.com/_amit__19_/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="https://github.com/amit-1901">
            <i className="fa-brands fa-square-github"></i>
          </a>
          
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Projects</h4>
          <a href="https://tripp-planner.netlify.app/">Trip-Planner</a>
          <a href="https://amit-task-tracker.netlify.app/">To-Do-List</a>
          <a href="/">Course-cart</a>
          <a href="https://time-day-tracker.netlify.app/">Time-Day-Tracker</a>
        </div>
        <div>
          <h4>Quick Links</h4>
          <a href="./">Home</a>
          <a href="./About">About</a>
          <a href="./Services">Services</a>
          <a href="./Contact">Contact</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="./Contact">Support</a>
          <a href="./Contact">Contact-Us</a>
          <a href="./Contact">TrobuleShooting</a>
          <a href="./Contact">Help-Line</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="./TermsAndConditions">Terms and conditions</a>
          <a href="/PrivacyPolicy">Privacy</a>
          <a href="/LicenseAgreement">Linces</a>
          {/* <a href="/">Current-Time</a> */}
        </div> 
        
               
      </div>  
      <div className="copy-right">
        <br/>
      <p>© 2024, Trip-Planner by Amit Agrahari. All rights reserved. To learn more, please visit  <a href="https://tripp-planner.netlify.app/" >Trip-Planner</a></p>
        </div>
          
    </div>
  );
};

export default Footer;
