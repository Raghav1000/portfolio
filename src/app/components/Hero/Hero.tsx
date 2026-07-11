"use client";
import Button from "../UI/Button/Button";
import { HiArrowDown } from "react-icons/hi";
import { FiFileText } from "react-icons/fi";
import DraggableButton from "./DraggableButton";
import Link from "next/link";
import { RESUME_PATH } from "@/app/utils/common/constants";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { DEFAULT_EASE } from "@/app/utils/common/animation";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: DEFAULT_EASE },
  },
};

const Hero = () => {
  return (
    <LazyMotion features={domAnimation}>
      <section className="relative py-16 pt-28 lg:pt-36 lg:pb-24 overflow-hidden">
        {/* soft ambient glow behind the header */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-10 -z-10 h-72 w-72 md:h-96 md:w-96 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"
        />

        <m.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center justify-center text-center"
        >
          <m.div variants={item}>
            <DraggableButton />
          </m.div>

          <m.h1
            variants={item}
            className="mt-6 text-foreground text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.1]"
          >
            <span className="block">Full Stack Developer</span>
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary to-primary/60">
              Raghav Mattad
            </span>
          </m.h1>

          <m.p
            variants={item}
            className="mt-6 text-foreground-muted text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed"
          >
            A full-stack developer with four years of experience shipping
            scalable web and cloud-based solutions end-to-end — React & Next.js
            frontends, Node.js and Golang backends, and production{" "}
            <span className="text-primary">GenAI</span> features built with
            Gemini and Claude.
          </m.p>

          <m.div
            variants={item}
            className="flex flex-wrap items-center justify-center gap-3 mt-9"
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
        </m.div>
      </section>
    </LazyMotion>
  );
};

export default Hero;
