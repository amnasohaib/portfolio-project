"use client";

import { Hind, Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

const hind = Hind({ weight: "400", subsets: ["latin"] });

import Link from "next/link";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row space-y-6 justify-center gap-6 items-center mx-12 md:mx-32"
    >
      <span className="flex flex-col w-full h-full">
        <div className="flex flex-col justify-center space-y-10 items-center text-justify text-sm md:text-lg">
          <h1 className={`${poppins.className} text-2xl md:text-4xl`}>
            About Me
          </h1>
          <span className={`${hind.className}`}>
            <p>Hi, I&apos;m Muhammad</p>

            <p>
              A cybersecurity student who&apos;s really into web security and
              cyber deception. I enjoy figuring out how to keep websites safe
              and finding smart ways to outmaneuver online threats.{" "}
            </p>

            <p>
              {" "}
              Learning about the latest security techniques and thinking
              creatively about how to protect the digital world is what drives
              me. I&apos;m excited to keep growing in this field and make a real
              difference in making the internet safer for everyone. If you want
              to follow my work, you can check out my{" "}
              <span className="hover-underline-animation">
                <Link href="https://www.linkedin.com/in/muhammad-abdullah-274033229">
                  LinkedIn
                </Link>
              </span>{" "}
              profile.
            </p>
          </span>
        </div>
      </span>
      <div className="w-full h-full relative md:px-10">
        <span className="absolute top-0 md:left-10 border-[1px] w-[10em] md:w-[15em] h-[15em] md:h-[20em] border-foreground-light dark:border-foreground-dark"></span>
        <span className="absolute -top-5 md:-top-10 right-0 md:right-20 border-[1px] w-[12em] md:w-[20em] h-[6em] md:h-[10em] border-foreground-light dark:border-foreground-dark"></span>
        <span className="absolute top-[8em] right-[8em] md:right-[20em] border-[1px] w-[7em] h-[10em] md:w-[10em] md:h-[15em] border-foreground-light dark:border-foreground-dark"></span>
      </div>
    </section>
  );
};

export default About;
