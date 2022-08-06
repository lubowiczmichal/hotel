import React from "react";
import { Link } from "react-router-dom";
import { additionalText } from "./Texts";
import "./TextWithBackground.css";

function TextWithBackground(props: { mode: String }) {
  switch (props.mode) {
    case "lobby":
      return (
        <div className="Lobby">
          <p id="Text">A Memorable Experience.</p>
          <Link className="link" to="/booking">
            <div className="linkText">Reserve Now</div>
          </Link>
        </div>
      );
    case "wedding":
      return (
        <div className="Wedding">
          <p id="Text">Events & Weddings</p>
          <p id="AdditionalText">{additionalText}</p>
        </div>
      );
    case "rooms":
      return (
        <div className="Rooms">
          <p id="Text">Rooms</p>
          <p id="AdditionalText">{additionalText}</p>
        </div>
      );
    case "facilities":
      return (
        <div className="Facilities">
          <p id="Text">Facilities</p>
        </div>
      );
    case "contact":
      return (
        <div className="Contact">
          <p id="Text">Contact Us</p>
        </div>
      );
    default:
      return <></>;
  }
}

export default TextWithBackground;
