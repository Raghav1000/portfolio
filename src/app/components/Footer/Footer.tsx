import { MdPermContactCalendar } from "react-icons/md";
import { AiFillFilePdf } from "react-icons/ai";
import { BiMailSend } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";
import { GrGithub } from "react-icons/gr";
import Button from "../UI/Button/Button";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="px-5 lg:px-20 xl:px-40 border-t border-t-primary/50 h-20 w-screen flex items-center justify-between">
      <h3 className="text-primary text-lg font-medium hidden sm:block">
        <Link href="/">
          Raghav Mattad <span className="text-center text-xs">Portfolio</span>
        </Link>
      </h3>
      <h3 className="text-primary text-lg font-medium block sm:hidden">
        <Link href="/">
          R M <span className="text-center text-xs">Portfolio</span>
        </Link>
      </h3>
      <div className="text-sm tracking-widest hidden md:block">
        &lt; CODE YOUR FUTURE &gt;
      </div>
      <div className="flex gap-1">
        <Button
          icon={<GrGithub size={20} />}
          size={"sm"}
          type="text"
          // onClick={() => push("www.github.com")}
        />
        <Button
          icon={<BsLinkedin size={20} />}
          size={"sm"}
          type="text"
          // onClick={() => push("www.linkedin.com")}
        />
        <Button
          icon={<BiMailSend size={22} />}
          size={"sm"}
          type="text"
          // onClick={() => push("www.github.com")}
        />
        <Button
          icon={<AiFillFilePdf size={20} />}
          size={"sm"}
          type="text"
          // onClick={() => push("www.linkedin.com")}
        />
        <Button
          icon={<MdPermContactCalendar size={20} />}
          size={"sm"}
          type="text"
          // onClick={() => push("www.linkedin.com")}
        />
      </div>
    </div>
  );
};

export default Footer;
