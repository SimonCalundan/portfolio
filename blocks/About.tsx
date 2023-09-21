import React from "react";
import Chat from "../components/Chat";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const About = () => {
  return (
    <section
      id="about"
      className="w-screen flex flex-col lg:flex-row gap-4 p-4 pb-16 bg-background text-background-dark dark:bg-background-dark dark:text-background transition-all max-w-[1400px] mx-auto"
    >
      {/* Text wrapper */}
      <div className="flex flex-col gap-4 font-mono w-full lg:w-1/2 max-w-2xl p-4">
        <h2 className="text-4xl ">About me</h2>
        <p className=" text-lg ">
          I work as a <span className=" text-teal-500">Frontend Developer</span>{" "}
          at Cernel while pursuing studies in Multimedia Design at Business
          Academy Aarhus. <br /> <br /> My expertise lies in{" "}
          <span className="text-teal-500">JavaScript development</span>, and I
          specialize in creating user-friendly web experiences.
          <br /> <br />I primarily develop applications using{" "}
          <span className="text-teal-500">React.js</span> and the framework{" "}
          <span className="text-teal-500">Next.js</span>. I also have experience
          with industry-standard UI libraries and CSS frameworks, including{" "}
          <span className="text-teal-500">MUI </span>
          and <span className="text-teal-500">TailwindCSS</span>.{" "}
        </p>
        {/* Social links */}
        <p className=" underline underline-offset-8">Socials:</p>
        <div className="flex items-center gap-4 text-3xl">
          <a
            className="hover:scale-105 hover:text-teal-500 transition-all"
            href="https://www.linkedin.com/in/simoncalundan/"
            target="_blank"
          >
            <AiFillLinkedin />
          </a>
          <a
            className="hover:scale-105 hover:text-teal-500 transition-all"
            href="https://github.com/SimonCalundan"
            target="_blank"
          >
            <AiFillGithub />
          </a>
        </div>
      </div>
      {/* Chat */}
      <Chat />
    </section>
  );
};

export default About;
