import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="Footer">
      <div className="leftSection">
        <p>Hotel Lunar</p>
        <p>will give you the comfort you deserve</p>
        <p>Address : Road 12, Peace Avenue,Ado,Ekiti</p>
        <p>Phone number : +2349061504648</p>
        <p>Email: oluwadamilolafaj@gmail.com</p>
      </div>
      <div className="rightSection">
        <div className="leftColumn">
          <p>ABOUT US</p>
          <p>CONTACT US</p>
          <p>ROOMS & RATES</p>
          <p>FACILITIES</p>
        </div>
        <div className="rightColumn">
          <p>FACEBOOK</p>
          <p>INSTAGRAM</p>
          <p>TWITTER</p>
          <p>SNAP CHAT</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
