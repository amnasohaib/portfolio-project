import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Home from "@/components/Home";

export default function Main() {
  return (
    <>
      <Navbar />
      <div className="relative bg-background-light dark:bg-background-dark text-foreground-light dark:text-foreground-dark transition-all duration-500">
        <Home />
        <span className="absolute right-0 md:right-4 top-[25em] h-[40em] w-[1px] m-4 md:m-12 bg-background-dark dark:bg-background-light transition-all duration-500">
          <span className="absolute top-2 -right-2 rounded-full w-4 h-4 bg-background-dark dark:bg-background-light"></span>
          <span className="absolute top-10 -right-2 rounded-full w-4 h-4 bg-background-dark dark:bg-background-light"></span>
          <span className="absolute bottom-2 -right-2 rounded-full w-4 h-4 bg-background-dark dark:bg-background-light"></span>
          <span className="absolute bottom-10 -right-2 rounded-full w-4 h-4 bg-background-dark dark:bg-background-light"></span>
        </span>
        <About />
        <span className="absolute left-0 md:left-4 bottom-[25em] h-[40em] w-[1px] m-4 md:m-12 bg-background-dark dark:bg-background-light transition-all duration-500">
          <span className="absolute top-2 -right-2 rounded-full w-4 h-4 bg-background-dark dark:bg-background-light"></span>
          <span className="absolute top-10 -right-2 rounded-full w-4 h-4 bg-background-dark dark:bg-background-light"></span>
          <span className="absolute bottom-2 -right-2 rounded-full w-4 h-4 bg-background-dark dark:bg-background-light"></span>
          <span className="absolute bottom-10 -right-2 rounded-full w-4 h-4 bg-background-dark dark:bg-background-light"></span>
        </span>
        <Contact />
      </div>
    </>
  );
}
