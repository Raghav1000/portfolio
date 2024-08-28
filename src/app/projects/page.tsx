"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { GoLinkExternal } from "react-icons/go";
import { GrGithub } from "react-icons/gr";
import Button from "../components/UI/Button/Button";

const ProjectsList = () => {
  const router = useRouter();
  return (
    <div className="py-8 md:py-16 lg:pt-32">
      <h2 className="text-4xl mb-10">Personal Projects</h2>
      {[
        { title: "Title", key: "project1" },
        { title: "Title", key: "project1" },
        { title: "Title", key: "project1" },
        { title: "Title", key: "project1" },
        { title: "Title", key: "project1" },
        { title: "Title", key: "project1" },
      ]?.map((item) => (
        <div
          key={item?.key}
          onClick={() => router.push("/blogs/id")}
          className="flex gap-3 pb-4 border-b border-primary/35 group cursor-pointer my-7"
        >
          <div>
            <Image
              src="/images/project-1.avif"
              alt="python-course"
              className="rounded-md"
              height={45}
              width={200}
            />
          </div>
          <div>
            <h4 className="text-2xl text-text mb-2">{item?.title}</h4>
            <div className="flex gap-4 font-light text-text/40 text-sm max-w-[500px] opacity-80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              eius architecto minima! Illum, tempore facere sunt doloremque quis
              ducimus, numquam perferendis ab inventore nam repudiandae sit,
              voluptate temporibus soluta officia?
            </div>
          </div>
          <div className="flex gap-2 ml-auto mt-auto">
            <Button
              icon={<GrGithub size={18} />}
              size={"sm"}
              type="default"
              onClick={(e) => {
                e.stopPropagation();
              }}
            />
            <Button
              icon={<GoLinkExternal size={18} />}
              size={"sm"}
              type="default"
              //   onClick={() => push("www.github.com")}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsList;
