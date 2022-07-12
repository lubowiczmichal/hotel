import React, { useEffect, useState } from "react";
import "./RoomsOverview.css";
import NavBar from "../NavBar";
import Footer from "../Footer";
import TextWithBackground from "../TextWithBackground";
import { roomData } from "./RoomsData";
import RoomPreview from "./RoomPreview";
import { NBPResponse, Rate } from "../Models";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

function RoomsOverview() {
  const rooms = roomData;
  const [currencies, setCurrencies] = useState<Rate[]>([]);
  const [selectedCurrency, setSelectedCurrency] = React.useState<string>("PLN");
  React.useState<string>("");

  const PLN: Rate = { code: "PLN", currency: "Zloty", ask: 1.0, bid: 1.0 };

  async function getNBPRates() {
    await fetch("https://api.nbp.pl/api/exchangerates/tables/C/?format=json")
      .then((res) => res.json())
      .then(
        (result: NBPResponse[]) => {
          const temp: Rate[] = result[0].rates.filter(
            (rate) => rate.code != "XDR"
          );
          temp.push(PLN);
          setCurrencies(temp);
        },
        (error) => console.log(error)
      );
  }

  function getCurrencyRate(currencyCode: string) {
    return currencies.filter((rate: Rate) => rate.code == currencyCode)[0].ask;
  }

  useEffect(() => {
    getNBPRates();
  }, []);

  return (
    <div className="RoomsOverview">
      <NavBar />
      <Autocomplete
        disablePortal
        value={selectedCurrency}
        onChange={(_: any, selected: string | null) => {
          if (selected) {
            setSelectedCurrency(selected);
          }
        }}
        id="currency"
        options={currencies
          .map((currency) => {
            return currency.code;
          })
          .sort()}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Currency" />}
      />
      <TextWithBackground mode="rooms" />
      <RoomPreview
        room={rooms[0]}
        currency={selectedCurrency}
        currencyRate={getCurrencyRate(selectedCurrency)}
      />
      <Footer />
    </div>
  );
}

export default RoomsOverview;
