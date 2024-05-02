"use client";
import { useState } from "react";
import Button from "../UI/Button/Button";
import { frontEndSkills, skillsTitle } from "@/app/data/skills";
import Image from "next/image";

const Skills = () => {
  const [currentSkill, setCurrentSkill] = useState("frontend");
  return (
    <div className="my-8 md:my-16">
      <h4 className="text-left hidden md:block text-3xl mb-5 border-b dark:border-green-200 border-green-700 w-max">
        Technologies that I have worked on
      </h4>
      <h4 className="text-left block md:hidden text-3xl mb-5 border-b dark:border-green-200 border-green-700 w-max">
        Skills
      </h4>
      <div className="rounded-sm flex flex-col gap-6">
        <div className="flex gap-1 overflow-scroll">
          {skillsTitle?.map((item) => (
            <Button
              key={item?.value}
              label={item?.label}
              className={
                currentSkill === item?.value
                  ? "border border-primary/50 w-max"
                  : "border border-transparent w-max"
              }
              onClick={() => setCurrentSkill(item?.value)}
            />
          ))}
        </div>

        <div className="flex gap-5 flex-wrap">
          {frontEndSkills.map((framework, i) => (
            <div
              className="p-2 bg-gray-200/5 shadow-lg rounded-md max-w-max"
              key={framework?.tooltip}
            >
              <Image
                src={framework?.icon}
                alt={framework?.tooltip}
                height={30}
                width={30}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
