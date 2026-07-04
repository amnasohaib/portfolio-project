"use client";

import { Hind, Poppins } from "next/font/google";
import ProjectCard from "./ProjectCard";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

const hind = Hind({ weight: "400", subsets: ["latin"] });

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row space-y-6 justify-center gap-6 items-center mx-12 md:mx-32"
    >
      <span className="flex flex-col w-full">
        <div className="flex flex-col space-y-10 mb-10  items-center text-justify text-sm md:text-lg">
          <h1 className={`${poppins.className} text-2xl md:text-4xl`}>
            About Me
          </h1>
          <span className={`${hind.className}`}>
            <p>
              A cybersecurity professional focused on offensive security and
              penetration testing. I enjoy identifying vulnerabilities,
              assessing the security of web applications and networks, and
              helping improve an organization&apos;s security posture through
              practical security testing. My background also includes Security
              Operations Center (SOC) experience, giving me a solid
              understanding of both offensive and defensive security.
            </p>
          </span>
        </div>
        {/* 
        <div className="flex flex-col space-y-10 items-center text-justify text-sm md:text-lg">
          <h1 className={`${poppins.className} text-2xl md:text-4xl`}>
            Projects
          </h1>
          <span className={`${hind.className}`}>
            <ProjectCard
              title="Real-time malware detection and prevention system"
              description="Real-time malware detection using system calls and HMM-based anomaly detection. Automated malicious process containment."
              tags={["Python", "HMM", "System calls", "Security"]}
            />
          </span>
        </div> */}
      </span>

      <div className="w-full h-[20em] relative md:px-10">
        <span className="absolute top-0 md:left-10 border-[1px] w-[10em] md:w-[15em] h-[15em] md:h-[20em] border-foreground-light dark:border-foreground-dark"></span>
        <span className="absolute -top-5 md:-top-10 right-0 md:right-20 border-[1px] w-[12em] md:w-[20em] h-[6em] md:h-[10em] border-foreground-light dark:border-foreground-dark"></span>
        <span className="absolute top-[8em] right-[8em] md:right-[20em] border-[1px] w-[7em] h-[10em] md:w-[10em] md:h-[15em] border-foreground-light dark:border-foreground-dark"></span>
      </div>
    </section>
  );
};

export default About;
