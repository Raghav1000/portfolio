import React from "react";
import Button from "../UI/Button/Button";
import { GrProjects } from "react-icons/gr";
import DraggableButton from "./DraggableButton";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="py-8 md:py-16 pt-20 lg:pt-32">
      <DraggableButton />
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-foreground text-4xl sm:text-5xl sm:leading-none lg:text-7xl mt-5">
          <span className="block text-[#F4FFFA00] bg-clip-text bg-gradient-to-b from-foreground to-foreground">
            Full stack developer
          </span>
          <span className="text-transparent leading-normal bg-clip-text bg-gradient-to-br from-primary via-primary to-primary/70 block md:ml-0">
            Raghav Mattad
          </span>
        </h1>
        <p className="pt-2 text-foreground text-sm sm:mt-2 lg:mb-0 sm:text-base lg:text-lg md:w-[75%] lg:w-[60%]">
          A full-stack developer with over two years of experience delivering
          innovative, scalable, efficient web and cloud-based solutions,
          dedicated to transform complex challenges into seamless digital
          experiences.
        </p>
      </div>
      <div className="flex items-center justify-center text-sm gap-5 my-5">
        <Link href={"#projects"}>
          <Button
            icon={<GrProjects />}
            label="View Projects"
            type="primary"
            size="lg"
          />
        </Link>
        <Link href={"/#contact"}>
          <Button label="Contact me" type="default" size="lg" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
