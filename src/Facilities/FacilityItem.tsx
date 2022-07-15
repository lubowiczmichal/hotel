import React from "react";
import "./FacilityItem.css";

function FacilityItem(props: { name: string; image: string }) {
  return (
    <div className="FacilityItem">
      <img src={props.image} />
      <h4>{props.name}</h4>
    </div>
  );
}

export default FacilityItem;
