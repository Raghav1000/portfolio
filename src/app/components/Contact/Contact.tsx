"use client";
import { AiFillFilePdf } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { GrGithub } from "react-icons/gr";
import Button from "../UI/Button/Button";
import { BiMailSend } from "react-icons/bi";
import ContactForm from "../AboutMe/ContactForm";

const Contact = () => {
  return (
    <div id="contact" className="my-8 md:my-16">
      <div className="grid rounded-md  border dark:border-white/10 border-black/15 shadow-md p-6">
        <h4 className="text-left text-3xl mb-5 border-b border-green-200 w-max">
          Get in touch
        </h4>
        <div className="grid md:grid-cols-2 sm:gap-0 md:gap-0">
          <div className="flex flex-col gap-5 justify-between">
            <div className="flex flex-col gap-4">
              <div>
             I’m always open to connecting and discussing new projects, creative ideas, or potential collaborations.
              </div>
              <div>
                If you have something in mind, feel free to reach out. I’d love to be part of your vision.
              </div>
            </div>
            <div className="flex gap-4">
              <Button
                icon={<GrGithub size={20} />}
                size={"lg"}
                type="default"
                onClick={() =>
                  window.open("https://www.github.com/Raghav1000", "_blank")
                }
              />
              <Button
                icon={<BsLinkedin size={20} />}
                size={"lg"}
                type="default"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/raghav-m-647180328",
                    "_blank"
                  )
                }
              />
              <Button
                icon={<BiMailSend size={20} />}
                size={"lg"}
                type="default"
                onClick={() =>
                  (window.location.href = "mailto:raghav.code.business@gmail.com")
                }
              />
              <a href="/resume.pdf" target="_blank">
                <Button
                  icon={<AiFillFilePdf size={20} />}
                  size={"lg"}
                  type="default"
                />
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
