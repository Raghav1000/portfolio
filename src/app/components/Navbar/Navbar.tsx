"use client";
import React from "react";
import NavItems from "./NavItems";
import CallToActionNavItems from "./CallToActionNavItems";
import MobileNav from "./MobileNav";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="max-w-content mx-auto px-5 lg:px-12 flex items-center justify-between py-3.5">
        <div className="flex items-center">
          <Link href="/" className="flex items-baseline gap-1.5">
            <span className="text-primary text-lg font-semibold tracking-tight">
              RM
            </span>
            <span className="text-foreground-muted text-xs uppercase tracking-widest">
              Portfolio
            </span>
          </Link>
          <NavItems />
        </div>
        <CallToActionNavItems />
        <MobileNav />
      </div>
    </div>
  );
};

export default Navbar;
