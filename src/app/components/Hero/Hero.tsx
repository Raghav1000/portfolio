"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "../UI/Button/Button";
import { FiFileText } from "react-icons/fi";
import { HiArrowDown } from "react-icons/hi";
import { TbSparkles } from "react-icons/tb";
import { RESUME_PATH } from "@/app/utils/common/constants";
import { LazyMotion, domAnimation, m } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const card =
  "rounded-2xl border border-white/10 bg-white/[0.02] transition-colors hover:border-primary/30";
const stack = ["React", "Next.js", "Node.js", "Golang", "GCP", "GenAI"];

const Hero = () => {
  const handleMouse = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <LazyMotion features={domAnimation}>
      <section className="relative overflow-hidden pt-28 lg:pt-36 pb-8 lg:pb-12">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="hero-grid absolute inset-0" />
          <div className="absolute left-1/2 top-[-4rem] h-[380px] w-[min(90vw,640px)] -translate-x-1/2 rounded-full bg-primary/15 blur-[130px]" />
        </div>

        <m.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[minmax(0,1fr)]"
        >
          {/* intro — interactive spotlight card */}
          <m.div
            variants={item}
            onMouseMove={handleMouse}
            style={{ ["--mx" as string]: "50%", ["--my" as string]: "0%" }}
            className={`${card} group relative overflow-hidden sm:col-span-2 lg:row-span-2 flex flex-col justify-between p-6 md:p-8 min-w-0`}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-0 md:opacity-100"
              style={{
                background:
                  "radial-gradient(340px circle at var(--mx) var(--my), rgba(220,184,79,0.10), transparent 60%)",
              }}
            />
            <span className="relative inline-flex w-max items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-foreground-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Available for new opportunities
            </span>

            <div className="relative mt-10">
              <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.24em] text-primary">
                Full Stack Developer · GenAI
              </p>
              <h1 className="mt-2 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.03]">
                Raghav{" "}
                <span className="text-shimmer bg-gradient-to-r from-[#F7ECC9] via-primary to-[#F7ECC9] bg-clip-text text-transparent">
                  Mattad
                </span>
              </h1>
              <p className="mt-4 max-w-md text-sm sm:text-base text-foreground-muted leading-relaxed">
                I build scalable web &amp; cloud products end-to-end — and ship
                production <span className="text-foreground">GenAI</span>{" "}
                features with Gemini &amp; Claude.
              </p>
            </div>

            <div className="relative mt-8 flex flex-wrap gap-3">
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
            </div>
          </m.div>

          {/* photo */}
          <m.div
            variants={item}
            className="relative overflow-hidden rounded-2xl border border-white/10 lg:row-span-2 min-h-[260px] min-w-0"
          >
            <Image
              src="/images/profile2.jpeg"
              alt="Raghav Mattad"
              fill
              sizes="(max-width:1024px) 100vw, 360px"
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
              <span className="rounded-full border border-white/10 bg-black/40 px-2.5 py-1 backdrop-blur">
                Ahmedabad, India
              </span>
            </div>
          </m.div>

          {/* stat */}
          <m.div
            variants={item}
            className={`${card} flex flex-col justify-center p-6`}
          >
            <div className="font-display text-4xl font-semibold text-primary">
              4
            </div>
            <div className="text-sm text-foreground-muted">
              Years of experience
            </div>
          </m.div>

          {/* stat */}
          <m.div
            variants={item}
            className={`${card} flex flex-col justify-center p-6`}
          >
            <div className="font-display text-4xl font-semibold text-primary">
              3
            </div>
            <div className="text-sm text-foreground-muted">
              Companies shipped at
            </div>
          </m.div>

          {/* stack */}
          <m.div
            variants={item}
            className={`${card} p-6 sm:col-span-2 lg:col-span-1 min-w-0`}
          >
            <div className="flex items-center gap-2 text-primary">
              <TbSparkles size={18} />
              <span className="text-sm font-medium">Core Stack</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {stack.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-foreground-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </m.div>
        </m.div>
      </section>
    </LazyMotion>
  );
};

export default Hero;
