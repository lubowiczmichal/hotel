import React from "react";
import "./FrontPage.css";
import NavBar from "../NavBar";
import TextWithBackground from "../TextWithBackground";
import AboutSection from "./AboutSection";
import PhotoGallery from "./PhotoGallery";
import Footer from "../Footer";
import RoomsOverview from "../RoomsSuites/RoomsOverview";
import FacilitiesOverview from "../Facilities/FacilitiesOverview";
import Contact from "../Contact/Contact";

function FrontPage() {
  return (
    <div className="FrontPage">
      <NavBar />
      <TextWithBackground mode="lobby" />
      <AboutSection />
      <TextWithBackground mode="wedding" />
      <PhotoGallery photos="room" size={10} />
      <Footer />
    </div>
  );
}

export default FrontPage;
