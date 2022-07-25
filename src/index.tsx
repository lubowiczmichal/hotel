import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage from "./HomePage/FrontPage";
import reportWebVitals from "./reportWebVitals";
import Contact from "./Contact/Contact";
import FacilitiesOverview from "./Facilities/FacilitiesOverview";
import RoomsOverview from "./RoomsSuites/RoomsOverview";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="RoomsOverview" element={<RoomsOverview />} />
        <Route path="FacilitiesOverview" element={<FacilitiesOverview />} />
        <Route path="Contact" element={<Contact />} />
        <Route
          path="facebook"
          element={<ExternalUrl link="https://www.facebook.com/" />}
        />
        <Route
          path="instagram"
          element={<ExternalUrl link="https://www.instagram.com/" />}
        />
        <Route
          path="twitter"
          element={<ExternalUrl link="https://twitter.com" />}
        />
        <Route
          path="snapchat"
          element={<ExternalUrl link="https://www.snapchat.com" />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

function ExternalUrl(props: { link: string }) {
  useEffect(() => {
    window.location.replace(props.link);
  });
  return null;
}

reportWebVitals();
