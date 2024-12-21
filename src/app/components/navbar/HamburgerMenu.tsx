import React from "react";
import "@/app/assets/globals.css";
const HamburgerMenu = () => {
  return (
    <label className="burger" htmlFor="burger">
      <input title="menü input" type="checkbox" id="burger" />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
};

export default HamburgerMenu;
