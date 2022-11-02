import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-blue-300">
      <nav className="max-w-[1140px] mx-auto ">
        <div className="flex justify-between items-center py-5">
          <img src="" alt="Logo" />
          <div>
            <NavLink to="/" className="p-3">
              Home
            </NavLink>
            <NavLink to="/items" className="p-3">
              Items
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
