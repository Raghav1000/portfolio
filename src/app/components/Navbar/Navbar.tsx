"use client";
import React from "react";
import NavItems from "./NavItems";
import CallToActionNavItems from "./CallToActionNavItems";
import { IoMenu } from "react-icons/io5";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <div className="px-6 lg:px-20 xl:px-40 flex items-center justify-between border-b border-primary/20 py-3">
      <div className="flex items-center">
        <h3 className="text-primary text-lg font-medium">
          R M <span className="text-center text-xs">Portfolio</span>
        </h3>
        <NavItems />
      </div>
      <CallToActionNavItems />
      <MobileNav />
    </div>
  );
};

export default Navbar;
