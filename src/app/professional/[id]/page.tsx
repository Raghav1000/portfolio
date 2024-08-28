"use client";
import { TbWorldWww } from "react-icons/tb";
import { careerData } from "@/app/utils/common/constants";
import Link from "next/link";
import { useParams } from "next/navigation";

const ProfessionalCareerInfo = () => {
  const params = useParams();
  const careerObj = careerData[params?.id as "bitontree" | "protocolzone"];

  return (
    <div className="py-8 md:py-16 lg:pt-32">
      <h2 className="text-4xl">{careerObj?.companyName}</h2>
      <div className="flex gap-5 items-center mt-5 text-gray-400">
        <Link href={careerObj?.companyWebsite}>
          <span className="text-blue-400">
            <TbWorldWww size={20} />
          </span>
        </Link>
        <span className="">{careerObj?.duration}</span>
        <span className="">{careerObj?.timePeriod}</span>
      </div>

      <h3 className="text-lg mt-10 tracking-widest border-b w-max opacity-85">
        Projects I did as a part of this company
      </h3>
      {careerObj?.projects?.map((item) => (
        <div
          key={item?.product}
          className="my-5 grid rounded-md border dark:border-white/10 border-black/15 shadow-md p-6"
        >
          <h4 className="text-sm">{item?.role}</h4>
          <h4 className="text-lg">{item?.product}</h4>
          <div className="flex gap-2 mt-3">
            {item?.techStack?.map((item) => (
              <div
                key={item}
                className="px-2 w-max py-0.5 border border-green-600/30 rounded-sm text-sm text-foreground"
              >
                <span>{item} </span>
              </div>
            ))}
          </div>
          <div className="pt-7 text-gray-400">{item?.description}</div>
        </div>
      ))}
    </div>
  );
};

export default ProfessionalCareerInfo;
