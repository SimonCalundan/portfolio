import ProjectHighlight from "@/components/ProjectHighlight";
const Projects = () => {
  return (
    <section
      id="projects"
      className="w-screen flex flex-col lg:flex-row gap-4 p-4 pb-32 bg-background text-background-dark dark:bg-background-dark dark:text-background transition-all max-w-[1400px] mx-auto"
    >
      {/* Text wrapper */}
      <div className="flex flex-col items-center gap-4 font-mono w-full p-4">
        <h2 className="text-4xl mb-8 ">My projects</h2>
        <div className=" flex flex-col gap-8">
          <ProjectHighlight
            number={1}
            title="Cernel Platform"
            description="Paid platform that provides users with AI based tools, that helps them improve their e-commerce business and generate more organic traffic through SEO. Build using Next.js, TailwindCSS and a REST API."
            imgPath="/platform.png"
            liveLink="https://platform.cernel.ai/"
          />
          <ProjectHighlight
            number={2}
            title="Cernel Website"
            description="Sales page build for the company Cernel. Build using Next.js and MUI."
            imgPath="/sales.png"
            liveLink="https://cernel.ai/"
          />
          <ProjectHighlight
            number={3}
            title="Kaika Music"
            description="Home page for Kaika Music, a music production company. Made as an exam project at BAAA. Build using Next.js, TypeScript and TailwindCSS."
            imgPath="/kaika.png"
            liveLink="https://kaika-music.vercel.app/"
            gitLink="https://github.com/SimonCalundan/KaikaMusic"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
