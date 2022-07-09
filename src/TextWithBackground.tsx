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
    default:
      return <></>;
  }
}

export default TextWithBackground;
