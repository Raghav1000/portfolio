import Image from "next/image";
import Button from "../UI/Button/Button";
import { BiDownload } from "react-icons/bi";
import { CiViewTimeline } from "react-icons/ci";

const AboutMe = () => {
  return (
    <div className="my-8 md:my-16">
      <h4
        id="about"
        className="text-left text-3xl mb-5 border-b border-green-200 w-max"
      >
        Discover About Me
      </h4>
      <div className="grid lg:grid-cols-2">
        <div>
          <h1 className="text-lg font-medium mb-3">
            Hello, This is <span className="text-primary">Raghav Mattad</span>
          </h1>
          <h6 className="leading-7 tracking-wide text-base font-light mb-5">
            Versatile fullstack developer with 2 years of experience in building
            robust, scalable web applications. Proficient in diverse
            technologies spanning frontend (React), backend (Node.js), database
            (MongoDB, PostgreSQL), and DevOps (Docker, AWS, GCP). Demonstrated
            expertise in crafting responsive user interfaces, designing RESTful
            APIs, and implementing CI/CD pipelines. Adept at quickly adapting to
            new technologies and methodologies to meet evolving project
            requirements.
          </h6>
          <h6 className="leading-7 tracking-wide text-base font-light mb-5">
            Seeking to leverage comprehensive technical skills and innovative
            problem-solving abilities to contribute to cutting-edge development
            projects. Common interests other than coding include Football,
            Travelling, Videomaking and PC games.
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
            <a href="/resume.pdf" target="_blank">
              <Button
                icon={<CiViewTimeline />}
                type="default"
                label="View Resume"
                className="ml-auto"
              />
            </a>
            <a href="/resume.pdf" download="Raghav_Mattad_Resume.pdf">
              <Button
                icon={<BiDownload />}
                type="primary"
                label="Download Resume"
                className="ml-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
