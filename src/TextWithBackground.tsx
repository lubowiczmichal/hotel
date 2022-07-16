import React from "react";
import { weddingText } from "./Texts";
import "./TextWithBackground.css";

function TextWithBackground(props: { mode: String }) {
  switch (props.mode) {
    case "lobby":
      return (
        <div className="Lobby">
          <p id="Text">A Memorable Experience.</p>
          <p id="ReserveButton">Reserve Now</p>
        </div>
      );
    case "wedding":
      return (
        <div className="Wedding">
          <p id="Text">Events & Weddings</p>
          <p id="AdditionalText">{weddingText}</p>
        </div>
      );
    case "rooms":
      return (
        <div className="Rooms">
          <p id="Text">Events & Weddings</p>
          <p id="AdditionalText">{weddingText}</p>
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
