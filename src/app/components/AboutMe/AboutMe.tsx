import Image from "next/image";
import Button from "../UI/Button/Button";
import { BiDownload } from "react-icons/bi";
import { CgViewDay } from "react-icons/cg";
import { BsEye } from "react-icons/bs";
import { CiViewTimeline } from "react-icons/ci";

const AboutMe = () => {
  return (
    <div className="my-8 md:my-16">
      <h4 className="text-left text-3xl mb-5 border-b border-green-200 w-max">
        Discover About Me
      </h4>
      <div className="grid lg:grid-cols-2">
        <div>
          <h1 className="text-lg font-medium mb-3">
            Hello, This is <span className="text-primary">Raghav Mattad</span>
          </h1>
          <h6 className="leading-7 tracking-wide text-base font-light mb-5">
            Transform those clicks into contacts. Until now, building an indie
            publication with memberships and subscriptions has been difficult
            and complicated. Ghost makes it easy, with native signup forms that
            turn anonymous views into logged-in members. Allow people to sign up
            for free, or purchase a paid subscription to support your work
            across monthly and yearly premium tiers. Hello, new friends.
          </h6>
          <h6 className="leading-7 tracking-wide text-base font-light mb-5">
            Allow people to sign up for free, or purchase a paid subscription to
            support your work across monthly and yearly premium tiers. Hello,
            new friends.
          </h6>
          <h6 className="leading-7 tracking-wide text-base font-light mb-5">
            Allow people to sign up for free, or purchase a paid subscription to
            support your work across monthly and yearly premium tiers. Hello,
            new friends.
          </h6>

          <div></div>
        </div>
        <div className="flex flex-col justify-around">
          <Image
            className="mx-auto lg:ml-auto rounded-md"
            src="/images/profile.jpeg"
            alt="profile-pic"
            height={600}
            width={400}
          />
          <div className="flex mx-auto lg:ml-auto mt-5 lg:mt-0 gap-3">
            <Button
              icon={<CiViewTimeline />}
              type="default"
              label="View Resume"
              className="ml-auto"
            />
            <Button
              icon={<BiDownload />}
              type="primary"
              label="Download Resume"
              className="ml-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
