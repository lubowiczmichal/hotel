import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  const navItems = [
    ["Home", ""],
    ["Rooms & Suites", "RoomsOverview"],
    ["Facilities", "FacilitiesOverview"],
    ["Contacts", "Contact"],
  ];

  return (
    <div className="Footer">
      <div className="leftSection">
        <h2>Hotel Lunar</h2>
        <p id="motto">will give you the comfort you deserve</p>
        <p>
          <b>Address : Road 12, Peace Avenue,Ado,Ekiti</b>
        </p>
        <p>
          <b>Phone number : +2349061504648</b>
        </p>
        <p>
          <b>Email: HotelLunar@gmail.com</b>
        </p>
      </div>
      <div className="rightSection">
        <div className="leftColumn">
          {navItems.map((item) => {
            return (
              <Link className="link" to={"/" + item[1]} key={item[0]}>
                <div className="linkText">{item[0]}</div>
              </Link>
            );
          })}
        </div>
        <div className="rightColumn">
          <Link className="link" to="/facebook">
            <div className="linkText">FACEBOOK</div>
          </Link>
          <Link className="link" to="/instagram">
            <div className="linkText">INSTAGRAM</div>
          </Link>
          <Link className="link" to="/twitter">
            <div className="linkText">TWITTER</div>
          </Link>
          <Link className="link" to="/snapchat">
            <div className="linkText">SNAP CHAT</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
