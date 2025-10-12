import React from "react";
import { mobileNavigation } from "../constant/Navigation";
import { NavLink } from "react-router-dom";
const MobileNavigation = () => {
  return (
    <section
      className="lg:hidden h-16 bg-black bg-opacity-40 z-40
    fixed bottom-0 w-full"
    >
      <div className="flex items-center justify-between h-full">
        {mobileNavigation.map((nav) => {
          return (
            <NavLink
            className={({isActive})=>`px-3 flex items-center flex-col justify-center
            ${isActive ? "text-blue-300" : "text-white"}`}
             key={nav.label + "mobilenfavigation"}
             to={nav.href}>
              <div className="text-2xl">{nav.icon}</div>
              <p className="text-sm">{nav.label}</p>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};

export default MobileNavigation;
