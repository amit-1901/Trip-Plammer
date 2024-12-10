import React from "react";

const TermsAndConditions = () => {
  const sectionStyle = {
    padding: "10px 0",
    fontSize: "16px",
    lineHeight: "1.5",
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const headingStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginTop: "20px",
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={titleStyle}>Terms and Conditions</h1>
      <p>Your terms and conditions content goes here.</p>
      <div style={sectionStyle}>
        <p style={headingStyle}>Acceptance:</p>
        <p>By using this site, you agree to these terms. Review them periodically as they may change.</p>
      </div>
      <div style={sectionStyle}>
        <p style={headingStyle}>Conduct:</p>
        <p>Use the site lawfully; no harmful content or malicious activities.</p>
      </div>
      <div style={sectionStyle}>
        <p style={headingStyle}>Intellectual Property:</p>
        <p>Content is owned by Trip-Planner. Do not copy or reproduce without permission.</p>
      </div>
      <div style={sectionStyle}>
        <p style={headingStyle}>Third-Party Links:</p>
        <p>We’re not responsible for the content of external links.</p>
      </div>
      <div style={sectionStyle}>
        <p style={headingStyle}>Liability:</p>
        <p>Use the website at your own risk; we are not responsible for errors or inaccuracies.</p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
