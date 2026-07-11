"use client";
import Button from "../UI/Button/Button";
import { GrGithub } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import { GITHUB_URL, LINKEDIN_URL } from "@/app/utils/common/constants";
import Link from "next/link";

const CallToActionNavItems = () => {
  return (
    <div className="hidden lg:flex items-center gap-2">
      <Button
        icon={<GrGithub size={16} />}
        size={"sm"}
        type="default"
        ariaLabel="GitHub profile"
        onClick={() => window.open(GITHUB_URL, "_blank")}
      />
      <Button
        icon={<BsLinkedin size={14} />}
        size={"sm"}
        type="default"
        ariaLabel="LinkedIn profile"
        onClick={() => window.open(LINKEDIN_URL, "_blank")}
      />
      <Link href="/#contact">
        <Button label={"Contact me"} size={"sm"} type="primary" />
      </Link>
    </div>
  );
};

export default CallToActionNavItems;
