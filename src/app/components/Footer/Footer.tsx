"use client";
import { MdPermContactCalendar } from "react-icons/md";
import { AiFillFilePdf } from "react-icons/ai";
import { BiMailSend } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";
import { GrGithub } from "react-icons/gr";
import Button from "../UI/Button/Button";
import Link from "next/link";
import {
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  PHONE,
  RESUME_PATH,
} from "@/app/utils/common/constants";

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-white/10">
      <div className="max-w-content mx-auto px-5 lg:px-12 h-20 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-baseline gap-1.5">
          <span className="text-primary text-base sm:text-lg font-semibold tracking-tight">
            <span className="hidden sm:inline">Raghav Mattad</span>
            <span className="sm:hidden">RM</span>
          </span>
          <span className="text-foreground-muted text-xs uppercase tracking-widest">
            Portfolio
          </span>
        </Link>
        <div className="text-xs tracking-widest text-foreground-muted hidden md:block">
          &lt; CODE YOUR FUTURE &gt;
        </div>
        <div className="flex gap-1">
          <Button
            icon={<GrGithub size={20} />}
            type="text"
            ariaLabel="GitHub profile"
            onClick={() => window.open(GITHUB_URL, "_blank")}
          />
          <Button
            icon={<BsLinkedin size={20} />}
            type="text"
            ariaLabel="LinkedIn profile"
            onClick={() => window.open(LINKEDIN_URL, "_blank")}
          />
          <Button
            icon={<BiMailSend size={22} />}
            type="text"
            ariaLabel="Send an email"
            onClick={() => (window.location.href = `mailto:${EMAIL}`)}
          />
          <a href={RESUME_PATH} target="_blank">
            <Button
              icon={<AiFillFilePdf size={20} />}
              type="text"
              ariaLabel="View resume"
            />
          </a>
          <Button
            icon={<MdPermContactCalendar size={20} />}
            type="text"
            ariaLabel="Call"
            onClick={() => (window.location.href = `tel:${PHONE}`)}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
