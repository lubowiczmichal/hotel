import React from "react";
import "./NavBar.css";

function NavBar() {
  const navItems = [
    "Home",
    "Rooms & Suites",
    "Facilities",
    "Contacts",
    "Offers",
    "Events",
  ];

  /*  
~~~~~~~~~~~~~~TEMPORARY
~~~~~~~~~~~~~~TEMPORARY
~~~~~~~~~~~~~~TEMPORARY
~~~~~~~~~~~~~~TEMPORARY
*/
  const selected = "Home";
  /*  
~~~~~~~~~~~~~~TEMPORARY
~~~~~~~~~~~~~~TEMPORARY
~~~~~~~~~~~~~~TEMPORARY
~~~~~~~~~~~~~~TEMPORARY
*/
  return (
    <div className="NavBar">
      <h1 id="logo">Hotel Lunar</h1>
      <>
        {navItems.map(function (item) {
          return <NavItem itemName={item} selected={item === selected} />;
        })}
      </>
    </div>
  );
}

function NavItem(props: { itemName: String; selected: Boolean }) {
  const className = props.selected ? "SelectedNavItem" : "NavItem";
  return <div className={className}>{props.itemName}</div>;
}

export default NavBar;
