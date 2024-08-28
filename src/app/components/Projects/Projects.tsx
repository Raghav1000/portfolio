import { GrProjects } from "react-icons/gr";
import Image from "next/image";
import { GrGithub } from "react-icons/gr";
import Button from "../UI/Button/Button";
import { GoLinkExternal } from "react-icons/go";

const Projects = () => {
  return (
    <div id="projects" className="my-8 md:my-16">
      <h4 className="text-left text-3xl mb-5 border-b border-green-200 w-max">
        Projects
      </h4>
      <div className="flex flex-col gap-20">
        <div className="grid md:grid-cols-2 relative md:items-center gap-5">
          <div>
            <Image
              src={"/images/project-1.avif"}
              alt={"project"}
              height={300}
              width={700}
              className="z-1 hover:opacity-100 rounded-md"
            />
          </div>
          <div className="my-auto ml-auto z-10 flex flex-col items-start md:items-end gap-4">
            <h4 className="text-primary text-sm font-light tracking-wide text-right">
              Featured Project
            </h4>
            <h2 className="text-xl font-semibold text-foreground tracking-wide text-right">
              Real Estate Trade
            </h2>
            <h6 className="border-b  border-t border-primary/20 py-5 md:pl-5 text-sm md:text-right rounded-sm shadow-lg leading-5">
              A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
              and more. Available on Visual Studio Marketplace, Package Control,
              Atom Package Manager, Visual Studio Marketplace.
            </h6>
            <div className="flex gap-1">
              <div className="px-2 w-max py-0.5 border border-green-600/30 rounded-sm text-foreground">
                <span>React </span>
              </div>
              <div className="px-2 w-max py-0.5 border border-green-600/30 rounded-sm text-foreground">
                <span>React </span>
              </div>
              <div className="px-2 w-max py-0.5 border border-green-600/30 rounded-sm text-foreground">
                <span>React </span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                icon={<GrGithub size={18} />}
                size={"sm"}
                type="default"
                //   onClick={() => push("www.github.com")}
              />
              <Button
                icon={<GoLinkExternal size={18} />}
                size={"sm"}
                type="default"
                //   onClick={() => push("www.github.com")}
              />
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 relative items-center gap-5">
          <div className="">
            <Image
              src={"/images/project-1.avif"}
              alt={"project"}
              height={300}
              width={700}
              className="z-1 hover:opacity-100 rounded-md"
            />
          </div>
          <div className="my-auto ml-auto z-10 flex flex-col items-start gap-4 md:-order-1">
            <h4 className="text-primary text-sm font-light tracking-wide text-right">
              Featured Project
            </h4>
            <h2 className="text-xl font-semibold text-foreground tracking-wide text-right">
              Real Estate Trade
            </h2>
            <h6 className="border-b  border-t border-primary/20 py-5 pr-5 text-sm text-left rounded-sm shadow-lg leading-5">
              A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
              and more. Available on Visual Studio Marketplace, Package Control,
              Atom Package Manager, Visual Studio Marketplace.
            </h6>
            <div className="flex gap-1">
              <div className="px-2 w-max py-0.5 border border-green-600/30 rounded-sm text-foreground">
                <span>React </span>
              </div>
              <div className="px-2 w-max py-0.5 border border-green-600/30 rounded-sm text-foreground">
                <span>React </span>
              </div>
              <div className="px-2 w-max py-0.5 border border-green-600/30 rounded-sm text-foreground">
                <span>React </span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                icon={<GrGithub size={18} />}
                size={"sm"}
                type="default"
                //   onClick={() => push("www.github.com")}
              />
              <Button
                icon={<GoLinkExternal size={18} />}
                size={"sm"}
                type="default"
                //   onClick={() => push("www.github.com")}
              />
            </div>
          </div>
        </div>
      </div>
      <Button
        label="View More Projects"
        className="my-5 md:my-10 flex mx-auto"
        type="primary"
        size="lg"
        icon={<GrProjects size={16} />}
      />
    </div>
  );
};

export default Projects;
