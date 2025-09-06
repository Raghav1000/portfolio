"use client";
import { workExperience } from "@/app/data/workExperience";
import Button from "../UI/Button/Button";
import Image from "next/image";
import { TbRoute } from "react-icons/tb";
import { useRouter } from "next/navigation";

const ProfessionalCareer = () => {
  const route = useRouter();
  return (
    <div className="my-8 md:my-16">
      <div className="grid rounded-md dark:bg-[#222322] bg-[#eaeaea] border dark:border-white/10 border-black/15 shadow-md py-4 px-2 md:p-6">
        <h4 className="text-left text-3xl mb-5 border-b border-green-200 w-max">
          Professional Career
        </h4>
        {workExperience?.map((item) => (
          <div
            key={item?.title}
            className="flex flex-col gap-4 mt-8 sm:mt-0 md:p-6"
          >
            <div className="flex gap-4">
              <Image
                src={item?.image}
                alt={item?.title}
                width={35}
                className="rounded-full h-10 w-10 shadow-md border"
                height={35}
              />
              <div className="flex flex-col">
                <h4 className="text-lg text-foreground">{item?.title}</h4>
                <div className="flex justify-between text-sm text-foreground/50">
                  <span>
                    {item?.role} . {item?.type}{" "}
                  </span>
                </div>
                <div className="text-sm text-foreground/50">
                  {item?.location} . {item?.workSpan}
                </div>
                <div className="text-[15px] mt-6 leading-">
                  {item?.description}
                </div>
                <div className="flex items-center justify-between mt-5">
                  <div className="hidden md:block px-2 py-0.5 border border-green-600/30 rounded-sm text-foreground">
                    <span>{item?.role} </span> -{" "}
                    {item?.key == "bitontree" ? 1 : 2} year
                  </div>
                  <Button
                    onClick={() => route.push(`professional/${item?.key}`)}
                    label="View Journey"
                    icon={<TbRoute />}
                    type="default"
                    size="sm"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalCareer;
