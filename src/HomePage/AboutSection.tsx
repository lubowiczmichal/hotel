import React from "react";
import "./AboutSection.css";
import bedroom from "../assets/homepage/Bedroom.png";
import { aboutText1, aboutText2 } from "../Texts";
function AboutSection() {
  return (
    <div className="AboutSection">
      <div className="TextSection">
        <h2>
          About <span>Hotel Lunar</span>
        </h2>
        <p>{aboutText1}</p>
        <p>{aboutText2}</p>
        <p className="readMoreButton">Read More</p>
      </div>
      <div className="ImageSection">
        <img src={bedroom} />
        <p className="Label">Standard Single Room</p>
      </div>
    </div>
  );
}

export default AboutSection;
