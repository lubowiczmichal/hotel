import React from "react";
import "./FrontPage.css";
import NavBar from "../NavBar";
import TextWithBackground from "./TextWithBackground";
import AboutSection from "./AboutSection";

function FrontPage() {
  return (
    <div className="FrontPage">
      <NavBar />
      <TextWithBackground mode="lobby" />
      <AboutSection />
      <TextWithBackground mode="wedding" />
    </div>
  );
}

export default FrontPage;
