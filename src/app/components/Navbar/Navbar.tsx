"use client";
import React from "react";
import NavItems from "./NavItems";
import CallToActionNavItems from "./CallToActionNavItems";
import { IoMenu } from "react-icons/io5";
import MobileNav from "./MobileNav";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="px-5 lg:px-20 xl:px-40 bg-background fixed w-full z-50 flex items-center justify-between border-b border-primary/20 py-3">
      <div className="flex items-center">
        <h3 className="text-primary text-lg font-medium">
          <Link href="/">
            R M <span className="text-center text-xs">Portfolio</span>
          </Link>
        </h3>
        <NavItems />
      </div>
      <CallToActionNavItems />
      <MobileNav />
    </div>
  );
};

export default Navbar;
