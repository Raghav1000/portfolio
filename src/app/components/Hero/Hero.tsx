"use client";
import Button from "../UI/Button/Button";
import { HiArrowDown } from "react-icons/hi";
import { FiFileText } from "react-icons/fi";
import DraggableButton from "./DraggableButton";
import Link from "next/link";
import { RESUME_PATH } from "@/app/utils/common/constants";
import { LazyMotion, domAnimation, m } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const up = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

const techStack = [
  "React",
  "Next.js",
  "Node.js",
  "Golang",
  "GCP",
  "GenAI",
];

const Hero = () => {
  return (
    <LazyMotion features={domAnimation}>
      <section className="relative overflow-hidden pt-32 lg:pt-44 pb-16 lg:pb-24">
        {/* background: subtle grid + soft gold glow */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="hero-grid absolute inset-0" />
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

          <m.p
            variants={up}
            className="mt-7 text-xs sm:text-sm font-medium uppercase tracking-[0.28em] text-primary"
          >
            Full Stack Developer · GenAI
          </m.p>

          <m.h1
            variants={up}
            className="mt-3 text-5xl sm:text-6xl lg:text-8xl font-semibold tracking-tight leading-[1.02]"
          >
            <span className="text-shimmer bg-gradient-to-r from-[#F7ECC9] via-primary to-[#F7ECC9] bg-clip-text text-transparent">
              Raghav Mattad
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
