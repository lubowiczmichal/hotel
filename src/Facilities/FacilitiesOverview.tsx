import React from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";
import TextWithBackground from "../TextWithBackground";
import { facilitiesData } from "./Facilities";
import "./FacilitiesOverview.css";
import FacilityItem from "./FacilityItem";

function FacilitiesOverview() {
  return (
    <div className="FacilitiesOverview">
      <NavBar />
      <TextWithBackground mode="facilities" />
      <div className="FacilitiesSection">
        {facilitiesData.map((item) => {
          return (
            <FacilityItem name={item.name} image={item.image} key={item.name} />
          );
        })}
        {facilitiesData.length % 2 !== 0 ? (
          <div className="FacilityItem"></div>
        ) : (
          ""
        )}
      </div>

      <Footer />
    </div>
  );
}

export default FacilitiesOverview;
