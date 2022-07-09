import React from "react";
import "./RoomsOverview.css";
import NavBar from "../NavBar";
import Footer from "../Footer";
import TextWithBackground from "../TextWithBackground";
import { roomData } from "./RoomsData";
import RoomPreview from "./RoomPreview";

function RoomsOverview() {
  const rooms = roomData;
  return (
    <div className="RoomsOverview">
      <NavBar />
      <TextWithBackground mode="rooms" />
      <RoomPreview room={rooms[0]} />
      <Footer />
    </div>
  );
}

export default RoomsOverview;
