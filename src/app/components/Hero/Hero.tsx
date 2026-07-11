import Button from "../UI/Button/Button";
import { HiArrowDown } from "react-icons/hi";
import { FiFileText } from "react-icons/fi";
import DraggableButton from "./DraggableButton";
import Link from "next/link";
import { RESUME_PATH } from "@/app/utils/common/constants";

const Hero = () => {
  return (
    <section className="py-16 pt-28 lg:pt-36 lg:pb-24">
      <div className="flex flex-col items-center justify-center text-center">
        <DraggableButton />
        <h1 className="mt-6 text-foreground text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.1]">
          <span className="block">Full Stack Developer</span>
          <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary to-primary/60">
            Raghav Mattad
          </span>
        </h1>
        <p className="mt-6 text-foreground-muted text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed">
          A full-stack developer with four years of experience shipping scalable
          web and cloud-based solutions end-to-end — React & Next.js frontends,
          Node.js and Golang backends, and production{" "}
          <span className="text-primary">GenAI</span> features built with Gemini
          and Claude.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 mt-9">
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
      </div>
    </section>
  );
};

export default Hero;
