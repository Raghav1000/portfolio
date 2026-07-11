"use client";
import { useRouter } from "next/navigation";
import { HiArrowLeft } from "react-icons/hi";
import { GrGithub } from "react-icons/gr";
import Button from "../components/UI/Button/Button";
import { GITHUB_URL } from "../utils/common/constants";

const ProjectsList = () => {
  const router = useRouter();

  return (
    <div className="min-h-[70vh] py-24 lg:pt-32 flex flex-col items-center justify-center text-center gap-5">
      <span className="text-primary text-xs font-medium uppercase tracking-[0.2em]">
        Projects
      </span>
      <h1 className="text-3xl sm:text-4xl font-semibold">
        Personal projects, coming soon
      </h1>
      <p className="text-foreground-muted max-w-md">
        I&apos;m currently curating a selection of my personal work. In the
        meantime, feel free to explore my repositories on GitHub.
      </p>
      <div className="flex flex-wrap justify-center gap-3 mt-2">
        <Button
          icon={<GrGithub size={18} />}
          label="View GitHub"
          type="primary"
          size="lg"
          onClick={() => window.open(GITHUB_URL, "_blank")}
        />
        <Button
          icon={<HiArrowLeft size={16} />}
          label="Back to home"
          type="default"
          size="lg"
          onClick={() => router.push("/")}
        />
      </div>
    </div>
  );
};

export default ProjectsList;
