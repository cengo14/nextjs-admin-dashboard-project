import React from "react";

import { sections } from "@/app/utils/constant";
import NavLink from "@/app/components/navbar/NavLink";
import HamburgerMenu from "@/app/components/navbar/HamburgerMenu";

const Navbar = () => {
  return (
    <nav className="h-screen min-w-[60px] border-r-4">
      <div className="navbar flex flex-col gap-5 text-gray-500 fixed bg-white h-screen z-50">
        <button
          title="menü button"
          className="grid place-items-center pt-5 text-2xl"
        >
          <HamburgerMenu />
        </button>
        <div>
          {sections.map((i, key) => (
            <NavLink item={i} key={key} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
