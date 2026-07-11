"use client";
import { useState } from "react";
import {  IoMenu } from "react-icons/io5";
import Button from "../UI/Button/Button";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import { DEFAULT_EASE } from "@/app/utils/common/animation";
import { AiOutlineClose } from "react-icons/ai";
import { navMenuItems } from "@/app/data/navMenu";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { GrGithub } from "react-icons/gr";
import { GITHUB_URL, LINKEDIN_URL } from "@/app/utils/common/constants";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.15, staggerChildren: 0.05, ease: DEFAULT_EASE },
    },
    exit: { opacity: 0, transition: { duration: 0.15 } },
  };
  return (
    <div className="lg:hidden">
      <div className="flex items-center gap-2">
        <Button
          icon={<IoMenu size={22} />}
          type="default"
          ariaLabel="Open menu"
          onClick={() => setIsOpen(true)}
        />
      </div>
      {
        <LazyMotion features={domAnimation}>
          <AnimatePresence mode="wait">
            {isOpen && (
              <m.div
                variants={container}
                initial="hidden"
                animate="show"
                exit="exit"
                className="bg-overlay fixed overflow-hidden inset-0 z-50 h-screen max-h-screen w-screen supports-[height:100cqh]:h-[100cqh] supports-[height:100svh]:h-[100svh] transform"
              >
                <div className="absolute px-5 py-3.5 flex items-center justify-between w-full left-0 top-0 z-50 bg-overlay border-b border-white/10">
                  <Link
                    href={"/"}
                    onClick={() => setIsOpen(false)}
                    className="flex items-baseline gap-1.5"
                  >
                    <span className="text-primary text-lg font-semibold tracking-tight">
                      RM
                    </span>
                    <span className="text-foreground-muted text-xs uppercase tracking-widest">
                      Portfolio
                    </span>
                  </Link>
                  <Button
                    icon={<AiOutlineClose size={16} />}
                    ariaLabel="Close menu"
                    onClick={() => setIsOpen(false)}
                  />
                </div>
                <div className="max-h-screen supports-[height:100cqh]:h-[100cqh] supports-[height:100svh]:h-[100svh] overflow-y-auto pt-20 pb-32 px-4">
                  <div className="flex flex-col font-normal text-sm">
                    {navMenuItems?.map((item) => (
                      <Link
                        onClick={() => setIsOpen(false)}
                        key={item?.url}
                        href={item?.url}
                        className="transition-all duration-300 hover:text-primary py-2 px-1 border-b border-foreground/10 hover:bg-appGrey-400"
                      >
                        {item?.title}
                      </Link>
                    ))}
                  </div>
                  <div className="flex gap-2 my-10 justify-center">
                    <Link href="/#contact" onClick={() => setIsOpen(false)}>
                      <Button label={"Contact me"} size={"sm"} type="primary" />
                    </Link>
                    <Button
                      icon={<GrGithub size={18} />}
                      size={"sm"}
                      type="default"
                      ariaLabel="GitHub profile"
                      onClick={() => window.open(GITHUB_URL, "_blank")}
                    />
                    <Button
                      icon={<BsLinkedin size={16} />}
                      size={"sm"}
                      type="default"
                      ariaLabel="LinkedIn profile"
                      onClick={() => window.open(LINKEDIN_URL, "_blank")}
                    />
                  </div>
                </div>
              </m.div>
            )}
          </AnimatePresence>
        </LazyMotion>
      }
    </div>
  );
};

export default MobileNav;
