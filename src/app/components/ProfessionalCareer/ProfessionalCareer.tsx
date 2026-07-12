"use client";
import { workExperience } from "@/app/data/workExperience";
import Button from "../UI/Button/Button";
import Image from "next/image";
import { TbRoute } from "react-icons/tb";
import { useRouter } from "next/navigation";
import SectionHeading from "../UI/SectionHeading/SectionHeading";
import Reveal from "../UI/Reveal/Reveal";

const ProfessionalCareer = () => {
  const router = useRouter();

  return (
    <section className="my-20 md:my-28">
      <Reveal>
        <SectionHeading eyebrow="Experience" index="04">
          Professional Career
        </SectionHeading>
      </Reveal>

      <ol className="relative ml-1.5 flex flex-col gap-6 border-l border-white/10">
        {workExperience?.map((item, i) => (
          <li key={item?.key} className="relative pl-6 sm:pl-10">
            {/* timeline node */}
            <span
              aria-hidden
              className="absolute -left-[7px] top-7 h-3.5 w-3.5 rounded-full bg-primary ring-4 ring-background"
            />
            <Reveal
              delay={i * 0.05}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:p-6 transition-colors hover:border-primary/30"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-2 shrink-0">
                  <Image
                    src={item?.image}
                    alt={item?.title}
                    width={48}
                    height={48}
                    className="rounded-xl h-12 w-12 object-cover bg-white/5 shadow-md border border-white/10"
                  />
                  {item?.partnerImage && (
                    <>
                      <span className="text-foreground-muted text-sm">×</span>
                      <Image
                        src={item.partnerImage}
                        alt={item.partner}
                        width={48}
                        height={48}
                        className="rounded-xl h-12 w-12 object-cover bg-white/5 shadow-md border border-white/10"
                      />
                    </>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {item?.title}
                      </h3>
                      {item?.partner && (
                        <p className="text-sm text-primary/90">
                          In partnership with {item.partner}
                        </p>
                      )}
                      <p className="text-sm text-foreground-muted mt-0.5">
                        {item?.role} · {item?.type}
                      </p>
                      <p className="text-sm text-foreground-muted">
                        {item?.location} · {item?.workSpan}
                      </p>
                    </div>
                    <span className="shrink-0 px-2.5 py-1 border border-primary/30 rounded-full text-xs text-primary">
                      {item?.duration}
                    </span>
                  </div>

                  <p className="text-sm md:text-[15px] mt-4 leading-6 text-foreground-muted">
                    {item?.description}
                  </p>

                  <div className="flex justify-end mt-5">
                    <Button
                      onClick={() => router.push(`/professional/${item?.key}`)}
                      label="View Journey"
                      icon={<TbRoute size={16} />}
                      type="default"
                      size="sm"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default ProfessionalCareer;
