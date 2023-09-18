import Landing from "@/blocks/Landing";
import About from "@/blocks/About";
import Projects from "@/blocks/Projects";
import Contact from "@/blocks/Contact";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Landing />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
