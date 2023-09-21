"use client";
import Image from "next/image";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { ScrollReveal } from "reveal-on-scroll-react";

interface ProjectHighlightProps {
  number: number;
  title: string;
  description: string;
  imgPath: string;
  gitLink?: string;
  liveLink?: string;
}

const ProjectHighlight: React.FC<ProjectHighlightProps> = ({
  number = 1,
  title = "Project title",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique accusamus saepe obcaecati quia dicta incidunt fugiat ipsam eos beatae amet.",
  imgPath = "/platform.png",
  gitLink = "#",
  liveLink = "#",
}) => {
  return (
    <ScrollReveal.div
      easing={"easeInOut"}
      animation={number % 2 === 0 ? "slide-in-right" : "slide-in-left"}
      className={`flex flex-col max-w-screen-xl ${
        number % 2 !== 0 ? "md:flex-row" : "md:flex-row-reverse"
      } gap-4 w-full items-center`}
    >
      {/* text wrapper */}
      <div className="flex flex-col gap-1 w-full md:w-1/2 ">
        <h2 className="text-2xl underline underline-offset-4 mb-2">{title}</h2>
        <p>{description}</p>
        {/* Links */}
        <div className=" text-2xl my-2 flex gap-2 items-center">
          <a
            className="hover:scale-105 transition-all hover:text-teal-500"
            href={liveLink}
            target="_blank"
          >
            <AiOutlineLink />
          </a>
          <a
            className={`hover:scale-105 hover:text-teal-500 transition-all ${
              gitLink === "#" && "opacity-50 pointer-events-none"
            } `}
            href={gitLink}
            target="_blank"
          >
            <AiFillGithub />
          </a>
        </div>
      </div>
      {/* Image wrapper */}
      <div className="w-full md:w-1/2 flex justify-center">
        <a
          className="hover:scale-105 active:scale-95 transition-all duration-500 ease-in-out"
          href={liveLink}
          target="_blank"
        >
          <Image
            className="border-background-dark border "
            src={imgPath}
            width={500}
            height={500}
            alt="Cernel Platform"
          />
        </a>
      </div>
    </ScrollReveal.div>
  );
};

export default ProjectHighlight;
