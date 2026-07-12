"use client";
import { useEffect, useState } from "react";
import Button from "../UI/Button/Button";
import { HiArrowDown } from "react-icons/hi";
import { FiFileText } from "react-icons/fi";
import DraggableButton from "./DraggableButton";
import Link from "next/link";
import { RESUME_PATH } from "@/app/utils/common/constants";
import {
  LazyMotion,
  domAnimation,
  m,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const up = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const roles = [
  "Full Stack Developer",
  "GenAI Engineer",
  "React · Node · Golang",
  "Cloud-Native Builder",
];

const techStack = ["React", "Next.js", "Node.js", "Golang", "GCP", "GenAI"];

const Hero = () => {
  const reduce = useReducedMotion();
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(
      () => setRoleIdx((i) => (i + 1) % roles.length),
      2600
    );
    return () => clearInterval(id);
  }, [reduce]);

  const handleMouse = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <LazyMotion features={domAnimation}>
      <section
        onMouseMove={handleMouse}
        style={{ ["--mx" as string]: "50%", ["--my" as string]: "26%" }}
        className="relative overflow-hidden pt-32 lg:pt-44 pb-16 lg:pb-24"
      >
        {/* layered background: grid, cursor spotlight, ambient glow */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="hero-grid absolute inset-0" />
          <div
            className="absolute inset-0 hidden md:block"
            style={{
              background:
                "radial-gradient(460px circle at var(--mx) var(--my), rgba(220,184,79,0.12), transparent 62%)",
            }}
          />
          <div className="absolute left-1/2 top-[-4rem] h-[420px] w-[min(90vw,620px)] -translate-x-1/2 rounded-full bg-primary/20 blur-[130px] opacity-70" />
        </div>

        <m.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center"
        >
          <m.div variants={up}>
            <DraggableButton />
          </m.div>

          {/* cycling role */}
          <m.div
            variants={up}
            className="mt-7 h-5 sm:h-6 overflow-hidden text-xs sm:text-sm font-medium uppercase tracking-[0.28em] text-primary"
          >
            <AnimatePresence mode="wait" initial={false}>
              <m.span
                key={roleIdx}
                className="block"
                initial={reduce ? false : { y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={reduce ? undefined : { y: "-110%", opacity: 0 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                {roles[roleIdx]}
              </m.span>
            </AnimatePresence>
          </m.div>

          {/* name — mask reveal + continuous shimmer */}
          <m.h1
            variants={up}
            className="mt-3 font-display text-5xl sm:text-6xl lg:text-8xl font-semibold tracking-tight leading-[1.02]"
          >
            <span className="block overflow-hidden pb-[0.12em]">
              <m.span
                className="block text-shimmer bg-gradient-to-r from-[#F7ECC9] via-primary to-[#F7ECC9] bg-clip-text text-transparent"
                initial={reduce ? false : { y: "115%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.95, ease: EASE, delay: 0.15 }}
              >
                Raghav Mattad
              </m.span>
            </span>
          </m.h1>

          <m.p
            variants={up}
            className="mt-6 text-foreground-muted text-sm sm:text-base lg:text-lg max-w-xl lg:max-w-2xl leading-relaxed"
          >
            I build scalable web &amp; cloud products end-to-end — React &amp;
            Next.js frontends, Node.js and Golang backends — and ship production{" "}
            <span className="text-foreground">GenAI</span> features with Gemini
            and Claude.
          </m.p>

          <m.div
            variants={up}
            className="flex flex-wrap items-center justify-center gap-3 mt-8"
          >
            <Link href={RESUME_PATH} target="_blank">
              <Button
                icon={<FiFileText size={16} />}
                label="View Resume"
                type="primary"
                size="lg"
              />
            </Link>
            <Link href="/#contact">
              <Button
                icon={<HiArrowDown size={16} />}
                label="Get in touch"
                type="default"
                size="lg"
              />
            </Link>
          </m.div>

          <m.ul
            variants={up}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:text-sm text-foreground-muted"
          >
            {techStack.map((tech, i) => (
              <li key={tech} className="flex items-center gap-x-5">
                {i > 0 && (
                  <span className="h-1 w-1 rounded-full bg-primary/50" />
                )}
                <span className="transition-colors hover:text-foreground">
                  {tech}
                </span>
              </li>
            ))}
          </m.ul>
        </m.div>
      </section>
    </LazyMotion>
  );
};

export default Hero;
