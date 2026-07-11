"use client";
import { TbWorldWww } from "react-icons/tb";
import { HiArrowLeft } from "react-icons/hi";
import { careerData } from "@/app/utils/common/constants";
import Link from "next/link";
import { useParams } from "next/navigation";

const ProfessionalCareerInfo = () => {
  const params = useParams();
  const careerObj = careerData[params?.id as keyof typeof careerData];

  if (!careerObj) {
    return (
      <div className="py-32 text-center">
        <h2 className="text-2xl mb-4">Company not found</h2>
        <Link href="/" className="text-primary hover:underline">
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="py-24 lg:pt-32 lg:pb-16">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-primary transition-colors mb-8"
      >
        <HiArrowLeft size={16} /> Back to home
      </Link>

      <h1 className="text-3xl sm:text-4xl font-semibold">
        {careerObj.companyName}
      </h1>
      <div className="flex flex-wrap gap-4 items-center text-sm md:text-base mt-4 text-foreground-muted">
        <Link
          href={careerObj.companyWebsite}
          target="_blank"
          className="text-primary hover:text-primary/80"
          aria-label="Company website"
        >
          <TbWorldWww size={20} />
        </Link>
        <span>{careerObj.duration}</span>
        <span>{careerObj.timePeriod}</span>
      </div>

      <h3 className="text-sm md:text-base mt-12 mb-6 uppercase tracking-widest text-foreground-muted border-b border-white/10 pb-2 w-max">
        Projects I worked on at this company
      </h3>

      <div className="flex flex-col gap-5">
        {careerObj.projects?.map((item) => (
          <div
            key={item.product}
            className="rounded-xl border border-white/10 bg-white/[0.02] p-6"
          >
            <span className="text-sm text-foreground-muted">{item.role}</span>
            <h4 className="text-lg text-primary font-medium">{item.product}</h4>
            <div className="flex gap-2 mt-3 flex-wrap">
              {item.techStack?.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 border border-primary/30 rounded-full text-xs text-foreground/90"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="mt-6 text-foreground-muted break-words text-sm md:text-[15px] leading-7">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalCareerInfo;
