import { AiFillFilePdf } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { GrGithub, GrResume } from "react-icons/gr";
import Button from "../UI/Button/Button";
import { BiMailSend } from "react-icons/bi";

const Contact = () => {
  return (
    <div className="my-8 md:my-16">
      <div className="grid rounded-md  border dark:border-white/10 border-black/15 shadow-md p-6">
        <h4 className="text-left text-3xl mb-5 border-b border-green-200 w-max">
          Get in touch
        </h4>
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <div>
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportunities to be
                part of your visions.
              </div>
              <div>
                Feel free to get in touch with me. I am always open to
                discussing new projects. Feel free to get in touch with me. I am
                always open to discussing new projects. Feel free to get in
                touch with me. I am always open to discussing new projects
              </div>
            </div>
            <div className="flex gap-4">
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
          <div className="flex flex-col gap-6 ml-20">
            <input
              placeholder="Name"
              className={
                "flex h-10 w-full rounded-md border border-gray-700 bg-transparent px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-foreground-muted"
              }
            />
            <input
              placeholder="Email"
              className={
                "flex h-10 w-full rounded-md border border-gray-700 bg-transparent px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-foreground-muted"
              }
            />
            <input
              placeholder="Phone"
              className={
                "flex h-10 w-full rounded-md border border-gray-700 bg-transparent px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-foreground-muted"
              }
            />
            <textarea
              rows={4}
              placeholder="Message"
              className={
                "flex w-full rounded-md border border-gray-700 bg-transparent px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-foreground-muted"
              }
            ></textarea>
            <Button label="Submit" type="primary" className="w-full"  size="sm"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
