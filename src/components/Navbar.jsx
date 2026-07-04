"use client";

import { useTheme } from "next-themes";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { GoMoon, GoSun } from "react-icons/go";

const poppins = Poppins({ weight: "300", subsets: ["latin"] });

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div
      className={`${poppins.className} fixed z-10 flex top-0 left-0 justify-between items-center w-full bg-background-light dark:bg-background-dark text-foreground-light dark:text-foreground-dark transition-all duration-500 p-4 md:space-x-5`}
    >
      <div>
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? (
            <GoSun
              size={"20"}
              className="hover:scale-150 transition-transform"
            />
          ) : (
            <GoMoon
              size={"20"}
              className="hover:scale-150 transition-transform"
            />
          )}
        </button>
      </div>

      <span className="text-[12px] md:text-[16px]  md:space-x-10">
        <Link href="#home">
          <button className="uppercase px-2 hover-underline-animation px-4 py-1">
            Home
          </button>
        </Link>
        <Link href="#about">
          <button className="uppercase px-2 hover-underline-animation px-4 py-1">
            About
          </button>
        </Link>
        <Link href="#contact">
          <button className="uppercase px-2 hover-underline-animation px-4 py-1">
            Contact
          </button>
        </Link>
        <Link href="/cv.pdf" download={"Muhammad Abdullah's CV"}>
          <button className="uppercase border-[1px] border-foreground-light dark:border-foreground-dark px-4 py-1">
            Resume
          </button>
        </Link>
      </span>
    </div>
  );
};

export default Navbar;
