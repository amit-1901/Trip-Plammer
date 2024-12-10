import React from "react";

const LicenseAgreement = () => {
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
      <h1 style={titleStyle}>License Agreement</h1>
      <p>Below are the terms of using our website.</p>
      <div style={sectionStyle}>
        <p style={headingStyle}>Usage:</p>
        <p>You’re allowed to use the site for personal, non-commercial purposes.</p>
      </div>
      <div style={sectionStyle}>
        <p style={headingStyle}>Restrictions:</p>
        <p>Don’t modify, distribute, or reverse-engineer any part of the website.</p>
      </div>
      <div style={sectionStyle}>
        <p style={headingStyle}>Termination:</p>
        <p>Access may be revoked for violations.</p>
      </div>
      <div style={sectionStyle}>
        <p style={headingStyle}>Liability:</p>
        <p>We’re not responsible for any damages arising from the use of this site.</p>
      </div>
    </div>
  );
};

export default LicenseAgreement;
