"use client";
import { useState } from "react";
import { skillsTitle } from "@/app/data/skills";
import Image from "next/image";
import SectionHeading from "../UI/SectionHeading/SectionHeading";
import Reveal from "../UI/Reveal/Reveal";

const Skills = () => {
  const [currentSkill, setCurrentSkill] = useState<string>("aiSkills");

  const activeGroup = skillsTitle?.find((item) => item?.value === currentSkill);

  return (
    <section className="my-20 md:my-28">
      <Reveal>
        <SectionHeading eyebrow="Tech Stack" index="02">
          Technologies I&apos;ve worked with
        </SectionHeading>
      </Reveal>

      <Reveal delay={0.05} className="flex flex-col gap-8 min-w-0">
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 -mx-1 px-1 min-w-0">
          {skillsTitle?.map((item) => (
            <button
              key={item?.value}
              onClick={() => setCurrentSkill(item?.value)}
              className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm transition-all duration-200 ${
                currentSkill === item?.value
                  ? "bg-primary/90 text-black font-medium"
                  : "border border-white/10 text-foreground-muted hover:text-foreground hover:border-white/25"
              }`}
            >
              {item?.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {activeGroup?.data?.map((skill) => (
            <div
              key={skill?.tooltip}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-3.5 py-3 transition-colors hover:border-primary/40"
            >
              <span className="flex items-center justify-center h-9 w-9 shrink-0 rounded-lg bg-white/[0.04]">
                <Image
                  src={skill?.icon}
                  alt={skill?.tooltip}
                  height={22}
                  width={22}
                  className="h-[22px] w-[22px] object-contain"
                />
              </span>
              <span className="text-sm text-foreground truncate">
                {skill?.tooltip}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default Skills;
