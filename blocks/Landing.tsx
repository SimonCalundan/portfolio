"use client";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import { ScrollReveal } from "reveal-on-scroll-react";
const Landing = () => {
  return (
    <section className="w-screen h-screen max-h-[800px] bg-background text-background-dark dark:bg-background-dark dark:text-background transition-all flex flex-col items-center justify-center">
      {/* Content wrapper */}
      <ScrollReveal.div className=" flex flex-col gap-4 mt-8 w-full items-center md:flex-row px-4 lg:px-32 max-w-7xl">
        {/* text wrapper */}
        <div className=" flex flex-col items-center gap-2 w-full  ">
          <h1 className=" font-mono text-4xl md:text-5xl">
            Hi, I&apos;m Simon!
          </h1>
          <div className="flex gap-2 text-lg md:text-xl items-center font-mono">
            <p>I&apos;m</p>
            <Typewriter
              options={{
                delay: 50,
                strings: [
                  "a frontend developer",
                  "a JavaScript enthusiast",
                  "a Tailwind connaisseur",
                  "a rookie backend developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        {/* Image */}
        <div className="W-1/3 max-w-lg">
          <Image
            className=" rounded-full"
            src="/simon.png"
            alt="Image of Simon Calundan"
            width={1000}
            height={1000}
          />
        </div>
      </ScrollReveal.div>
      <a
        href="#about"
        className=" font-mono text-xl mt-6 flex flex-col gap-2 items-center animate-pulse hover:text-teal-500 transition-all group "
      >
        scrollDown();{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 text-background-dark dark:text-background transition-all group-hover:text-teal-500 "
        >
          <path
            fillRule="evenodd"
            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </section>
  );
};

export default Landing;
