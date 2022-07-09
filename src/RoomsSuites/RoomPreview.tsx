import React, { useEffect, useState } from "react";
import "./RoomPreview.css";
import { Room } from "./RoomsData";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { NBPResponse } from "../Models";

function RoomPreview(props: { room: Room }) {
  const [currencies, setCurrencies] = useState<string[]>([]);
  async function getNBPRates() {
    await fetch("https://api.nbp.pl/api/exchangerates/tables/C/?format=json")
      .then((res) => res.json())
      .then(
        (result: NBPResponse) => {
          setCurrencies(
            result.rates.map((item) => {
              return item.currency;
            })
          );
        },
        (error) => console.log(error)
      );
  }
  useEffect(() => {
    getNBPRates();
    console.log(currencies);
  });
  return (
    <div className="RoomPreview">
      <img id="Image" src={props.room.image} />
      <h3>{props.room.name}</h3>
      <ul>
        <li>{props.room.bathrooms}</li>
        <li>{props.room.beds}</li>
        <li>{props.room.people}</li>
      </ul>
      <div className="PriceSection">
        <p>{props.room.price}</p>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={currencies}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Movie" />}
        />
      </div>
    </div>
  );
}

export default RoomPreview;
