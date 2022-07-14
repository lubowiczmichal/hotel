import React from "react";
import "./RoomPreview.css";
import { Room } from "./RoomsData";
function RoomPreview(props: {
  room: Room;
  currency: string;
  currencyRate: number;
}) {
  return (
    <div className="RoomPreview">
      <img id="Image" src={props.room.image} />
      <h3>{props.room.name}</h3>
      <ul>
        <li>
          {props.room.bathrooms} bathroom{props.room.bathrooms > 1 ? "s" : ""}
        </li>
        <li>
          {props.room.beds} bed{props.room.beds > 1 ? "s" : ""}
        </li>
        <li>
          {props.room.people} {props.room.people > 1 ? "people" : "person"}
        </li>
      </ul>
      <div className="PriceSection">
        <p>
          {((props.room.price * 1) / props.currencyRate).toFixed(2)}{" "}
          {props.currency}
        </p>
        <p>BOOK NOW</p>
      </div>
    </div>
  );
}

export default RoomPreview;
