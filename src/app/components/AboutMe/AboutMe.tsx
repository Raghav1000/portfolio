import Image from "next/image";
import Button from "../UI/Button/Button";
import { BiDownload } from "react-icons/bi";
import { CiViewTimeline } from "react-icons/ci";
import SectionHeading from "../UI/SectionHeading/SectionHeading";
import { RESUME_PATH } from "@/app/utils/common/constants";

const AboutMe = () => {
  return (
    <section className="my-20 md:my-28">
      <SectionHeading id="about" eyebrow="Introduction">
        Discover About Me
      </SectionHeading>
      <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:gap-16 items-start">
        <div>
          <h3 className="text-xl font-medium mb-4">
            Hello, I&apos;m <span className="text-primary">Raghav Mattad</span>
          </h3>
          <p className="leading-7 tracking-wide text-sm sm:text-base text-foreground-muted mb-5">
            Versatile full-stack developer with 4 years of experience building
            robust, scalable web applications. Proficient in diverse technologies
            spanning frontend (React, Next.js), backend (Node.js and Golang),
            databases (MongoDB, PostgreSQL, Bigtable), and DevOps (Docker,
            Kubernetes, AWS, GCP). Demonstrated expertise in crafting responsive
            user interfaces, designing RESTful APIs, and implementing CI/CD
            pipelines — much of it within a live horse-racing betting platform.
          </p>
          <p className="leading-7 tracking-wide text-sm sm:text-base text-foreground-muted">
            Lately I&apos;ve been building applied{" "}
            <span className="text-primary">GenAI</span> — shipping production
            features with Google Gemini and Claude, from a generative jockey-silk
            system to natural-language-to-SQL segmentation and custom Claude Code
            skills. Common interests other than coding include Football,
            Travelling, Videomaking, and PC games.
          </p>
        </div>
        <div className="flex flex-col items-center gap-6 mx-auto">
          <div className="relative w-52 sm:w-60 aspect-[3/4] overflow-hidden rounded-xl border border-white/10">
            <Image
              src="/images/profile2.jpeg"
              alt="Raghav Mattad"
              fill
              sizes="(max-width: 640px) 208px, 240px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={RESUME_PATH} target="_blank">
              <Button
                icon={<CiViewTimeline size={18} />}
                type="default"
                label="View Resume"
              />
            </a>
            <a href={RESUME_PATH} download="Raghav_Mattad_Resume.pdf">
              <Button
                icon={<BiDownload size={18} />}
                type="primary"
                label="Download Resume"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
