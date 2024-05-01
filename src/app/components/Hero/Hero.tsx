import React from "react";
import Button from "../UI/Button/Button";
import { GrProjects } from "react-icons/gr";
import DraggableButton from "./DraggableButton";

const Hero = () => {
  return (
    <div className="py-8 md:py-16">
      <DraggableButton />
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-foreground text-4xl sm:text-5xl sm:leading-none lg:text-7xl mt-5">
          <span className="block text-[#F4FFFA00] bg-clip-text bg-gradient-to-b from-foreground to-foreground">
            Build in a weekend
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary to-primary/70 block md:ml-0">
            Scale to millions
          </span>
        </h1>
        <p className="pt-2 text-foreground my-3 text-sm sm:mt-5 lg:mb-0 sm:text-base lg:text-lg lg:w-[60%]">
          Supabase is an open source Firebase alternative.
          <br className="hidden md:block" />
          Start your project with a Postgres database, Authentication, instant
          APIs, Edge Functions, Realtime subscriptions, Storage, and Vector
          embeddings.
        </p>
      </div>
      <div className="flex items-center justify-center text-sm gap-5 my-5">
        <Button
          icon={<GrProjects />}
          label="View Projects"
          type="primary"
          size="lg"
        />
        <Button label="Contact me" type="default" size="lg" />
      </div>
    </div>
  );
};

export default Hero;
