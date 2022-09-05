import React, { useState } from "react";
import "./AboutSection.css";
import bedroom from "../assets/homepage/Bedroom.png";
import { aboutText1, aboutText2 } from "../Texts";
import Button from "@mui/material/Button";
function AboutSection() {
  const [showMore, setShowMore] = useState<boolean>(false);
  return (
    <div className="AboutSection">
      <div className="TextSection">
        <h2>
          About <span>Hotel Lunar</span>
        </h2>
        {!showMore ? (
          <p>{aboutText1}</p>
        ) : (
          <div>
            {" "}
            <p>{aboutText1}</p>
            <p>{aboutText2}</p>{" "}
          </div>
        )}
        <Button
          className="readMoreButton"
          onClick={() => {
            setShowMore(!showMore);
          }}
        >
          {!showMore ? "Read More" : "Show Less"}
        </Button>
      </div>
      <div className="ImageSection">
        <img src={bedroom} />
        <p className="Label">Standard Single Room</p>
      </div>
    </div>
  );
}

export default AboutSection;
