"use client";

import { Laila } from "next/font/google";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const laila = Laila({ weight: "400", subsets: ["latin"] });

const Home = () => {
  return (
    <section
      id="home"
      className="flex pl-6 bg-background-light dark:bg-background-dark text-foreground-light dark:text-foreground-dark transition-all duration-500 justify-start items-end min-h-screen"
    >
      <span className="md:fixed flex md:left-4 flex-col justify-end items-center space-y-6 pb-20">
        <Link
          href={""}
          className="relative inline-block group hover:scale-110 transition-transform"
        >
          <FaGithub className="relative text-[20px] md:text-[30px] z-10 group-hover:animate-bounce" />
        </Link>

        <Link
          href="mailto:muhammad.ab2024@gmail.com"
          className="relative inline-block group hover:scale-110 transition-transform"
        >
          <FaEnvelope className="relative text-[20px] md:text-[30px] z-10 group-hover:animate-bounce" />
        </Link>

        <Link
          href="https://www.linkedin.com/in/muhammad-abdullah-274033229"
          className="relative inline-block group hover:scale-110 transition-transform"
        >
          <FaLinkedin className="relative text-[20px] md:text-[30px] z-10 group-hover:animate-bounce" />
        </Link>
      </span>
      <span className="flex min-h-screen md:pl-32 items-center">
        <span className="flex flex-col space-y-4 md:space-y-8">
          <p className="text-[16px] md:text-[20px]">Hi, my name is </p>
          <h1 className={`${laila.className} text-[28px] sm:text-[64px]`}>
            Muhammad Abdullah
          </h1>
        </span>
      </span>
    </section>
  );
};

export default Home;
