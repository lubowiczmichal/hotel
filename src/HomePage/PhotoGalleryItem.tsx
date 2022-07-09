import React from "react";
import "./PhotoGalleryItem.css";

function PhotoGalleryItem(props: { photos: string; number: Number }) {
  let image;
  switch (props.photos) {
    case "room":
      image = require("../assets/homepage/gallery/room" +
        props.number +
        ".png");
      break;
    default:
      image = null;
  }

  return (
    <div className="PhotoGalleryItem">
      <img className="Image" src={image} alt={image} />
    </div>
  );
}

export default PhotoGalleryItem;
