"use client";
import { useState } from "react";
import { IoCloseCircleOutline, IoMenu } from "react-icons/io5";
import Button from "../UI/Button/Button";
import { MdCancelScheduleSend, MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import { DEFAULT_EASE } from "@/app/utils/common/animation";
import { AiOutlineClose } from "react-icons/ai";
import { navMenuItems } from "@/app/data/navMenu";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { GrGithub } from "react-icons/gr";
import { useRouter } from "next/navigation";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { push } = useRouter();

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
          icon={
            theme === "dark" ? (
              <MdDarkMode size={16} />
            ) : (
              <MdLightMode size={16} />
            )
          }
          size={"sm"}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
        <Button icon={<IoMenu />} onClick={() => setIsOpen(!isOpen)} />
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
                <div className="absolute px-5 lg:px-20 xl:px-40 py-3 flex items-center justify-between w-screen left-0 top-0 z-50 bg-overlay before:content[''] before:absolute before:w-full before:h-3 before:inset-0 before:top-full before:bg-gradient-to-b before:from-background-overlay before:to-transparent  border-b border-primary/20">
                  <h3 className="text-primary text-lg font-medium">
                    R M <span className="text-center text-xs">Portfolio</span>
                  </h3>
                  <Button
                    icon={<AiOutlineClose size={16} />}
                    onClick={() => setIsOpen(!isOpen)}
                  />
                </div>
                <div className="max-h-screen supports-[height:100cqh]:h-[100cqh] supports-[height:100svh]:h-[100svh] overflow-y-auto pt-20 pb-32 px-4">
                  <div className="flex flex-col font-normal text-sm">
                    {navMenuItems?.map((item) => (
                      <Link
                        key={item?.url}
                        href={item?.url}
                        className="transition-all duration-300 hover:text-primary py-2 px-1 border-b border-foreground/10 hover:bg-appGrey-400"
                      >
                        {item?.title}
                      </Link>
                    ))}
                  </div>
                  <div className="flex gap-2 my-10 justify-center">
                    <Button
                      label={"Contact me"}
                      size={"sm"}
                      type="primary"
                      onClick={() => push("/contact")}
                    />
                    <Button
                      icon={<GrGithub size={18} />}
                      size={"sm"}
                      onClick={() => push("www.github.com")}
                    />
                    <Button
                      icon={<BsLinkedin size={16} />}
                      size={"sm"}
                      onClick={() => push("www.linkedin.com")}
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
