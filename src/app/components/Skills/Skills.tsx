"use client";
import { useState } from "react";
import { skillsTitle } from "@/app/data/skills";
import Image from "next/image";
import SectionHeading from "../UI/SectionHeading/SectionHeading";

const Skills = () => {
  const [currentSkill, setCurrentSkill] = useState<string>("frontEndSkills");

  const activeGroup = skillsTitle?.find((item) => item?.value === currentSkill);

  return (
    <section className="my-20 md:my-28">
      <SectionHeading eyebrow="Tech Stack">
        Technologies I&apos;ve worked with
      </SectionHeading>

      <div className="flex flex-col gap-8">
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 -mx-1 px-1">
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

        <div className="flex gap-3 flex-wrap">
          {activeGroup?.data?.map((framework) => (
            <div
              className="tooltip flex items-center justify-center h-14 w-14 bg-white/[0.03] border border-white/10 shadow-sm rounded-xl transition-colors hover:border-primary/40"
              key={framework?.tooltip}
            >
              <Image
                src={framework?.icon}
                alt={framework?.tooltip}
                height={30}
                width={30}
              />
              <span className="tooltip-text">{framework?.tooltip}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
