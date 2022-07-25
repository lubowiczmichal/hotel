import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const navItems = [
    ["Home", ""],
    ["Rooms & Suites", "RoomsOverview"],
    ["Facilities", "FacilitiesOverview"],
    ["Contacts", "Contact"],
  ];

  const location = useLocation();

  return (
    <div className="NavBar">
      <h1 id="logo">Hotel Lunar</h1>
      <>
        {navItems.map(function (item) {
          return (
            <NavItem
              itemName={item[0]}
              itemAddress={item[1]}
              selected={"/" + item[1] === location.pathname}
              key={item[1]}
            />
          );
        })}
      </>
    </div>
  );
}

function NavItem(props: {
  itemName: string;
  itemAddress: string;
  selected: boolean;
}) {
  const className = props.selected ? "SelectedNavItem" : "NavItem";
  return (
    <Link className="Link" to={"/" + props.itemAddress}>
      <div className={className}>{props.itemName}</div>
    </Link>
  );
}

export default NavBar;
