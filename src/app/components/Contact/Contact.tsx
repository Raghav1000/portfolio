import { AiFillFilePdf } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { GrGithub, GrResume } from "react-icons/gr";
import Button from "../UI/Button/Button";
import { BiMailSend } from "react-icons/bi";

const Contact = () => {
  return (
    <div className="my-8 md:my-16">
      <div className="grid rounded-md dark:bg-[#222322] bg-[#eaeaea] border dark:border-white/10 border-black/15 shadow-md p-6">
        <h4 className="text-left text-3xl mb-5 border-b border-green-200 w-max">
          Get in touch
        </h4>
        <div className="grid grid-cols-2">
          <div className="w-96">
            <span className="">
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions.
            </span>
            <div className="flex gap-4 my-3">
              <Button
                icon={<GrGithub size={20} />}
                size={"lg"}
                type="default"
                // onClick={() => push("www.github.com")}
              />
              <Button
                icon={<BsLinkedin size={20} />}
                size={"lg"}
                type="default"
                // onClick={() => push("www.linkedin.com")}
              />
              <Button
                icon={<BiMailSend size={20} />}
                size={"lg"}
                type="default"
                // onClick={() => push("www.github.com")}
              />
              <Button
                icon={<AiFillFilePdf size={20} />}
                size={"lg"}
                type="default"
                // onClick={() => push("www.linkedin.com")}
              />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
