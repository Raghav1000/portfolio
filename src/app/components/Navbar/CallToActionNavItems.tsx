"use client";
import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Button from "../UI/Button/Button";
import { GrGithub } from "react-icons/gr";
import { useRouter } from "next/navigation";
import { BsLinkedin } from "react-icons/bs";

const CallToActionNavItems = () => {
  const { theme, setTheme } = useTheme();
  const { push } = useRouter();

  return (
    <div className="hidden text-xs lg:flex items-center gap-2">
      <Button
        label={"Github"}
        icon={<GrGithub size={16} />}
        size={"sm"}
        onClick={() => push("www.github.com")}
      />
      <Button
        label={"Linkedin"}
        icon={<BsLinkedin size={14} />}
        size={"sm"}
        onClick={() => push("www.linkedin.com")}
      />
      <Button
        label={"Contact me"}
        size={"sm"}
        type="primary"
        onClick={() => push("/contact")}
      />
      <Button
        icon={
          theme === "dark" ? (
            <MdDarkMode size={16} />
          ) : (
            <MdLightMode size={16} />
          )
        }
        size={"sm"}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
    </div>
  );
};

export default CallToActionNavItems;
