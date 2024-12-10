import React from "react";

const PrivacyPolicy = () => {
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
      <h1 style={titleStyle}>Privacy Policy</h1>
      <p>Your privacy is important to us. Below is an outline of our policies regarding your data.</p>
      <div style={sectionStyle}>
        <p style={headingStyle}>Data Collection:</p>
        <p>We collect personal information (e.g., name, email) and usage data (e.g., IP address).</p>
      </div>
      <div style={sectionStyle}>
        <p style={headingStyle}>Usage:</p>
        <p>Your data is used to improve our services and for communication.</p>
      </div>
      <div style={sectionStyle}>
        <p style={headingStyle}>Cookies:</p>
        <p>We use cookies for a better experience. You can disable them via your browser.</p>
      </div>
      <div style={sectionStyle}>
        <p style={headingStyle}>Data Sharing:</p>
        <p>We don’t sell or share your data unless legally required.</p>
      </div>
      <div style={sectionStyle}>
        <p style={headingStyle}>Security:</p>
        <p>We take precautions to protect your data but can’t guarantee full security.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
