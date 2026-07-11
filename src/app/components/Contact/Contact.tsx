"use client";
import { AiFillFilePdf } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { GrGithub } from "react-icons/gr";
import Button from "../UI/Button/Button";
import { BiMailSend } from "react-icons/bi";
import ContactForm from "../AboutMe/ContactForm";
import SectionHeading from "../UI/SectionHeading/SectionHeading";
import {
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  RESUME_PATH,
} from "@/app/utils/common/constants";

const Contact = () => {
  return (
    <section id="contact" className="my-20 md:my-28">
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] shadow-md p-6 md:p-10">
        <SectionHeading eyebrow="Contact">Get in touch</SectionHeading>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-4 text-sm sm:text-base text-foreground-muted leading-relaxed">
              <p>
                I&apos;m always open to connecting and discussing new projects,
                creative ideas, or potential collaborations.
              </p>
              <p>
                If you have something in mind, feel free to reach out. I&apos;d
                love to be part of your vision.
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="text-primary hover:underline w-max"
              >
                {EMAIL}
              </a>
            </div>
            <div className="flex gap-3">
              <Button
                icon={<GrGithub size={20} />}
                size={"lg"}
                type="default"
                ariaLabel="GitHub profile"
                onClick={() => window.open(GITHUB_URL, "_blank")}
              />
              <Button
                icon={<BsLinkedin size={20} />}
                size={"lg"}
                type="default"
                ariaLabel="LinkedIn profile"
                onClick={() => window.open(LINKEDIN_URL, "_blank")}
              />
              <Button
                icon={<BiMailSend size={20} />}
                size={"lg"}
                type="default"
                ariaLabel="Send an email"
                onClick={() => (window.location.href = `mailto:${EMAIL}`)}
              />
              <a href={RESUME_PATH} target="_blank">
                <Button
                  icon={<AiFillFilePdf size={20} />}
                  size={"lg"}
                  type="default"
                  ariaLabel="View resume"
                />
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
