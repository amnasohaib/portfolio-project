import { Dela_Gothic_One } from "next/font/google";
import AnimatedLink from "./animatedLink";
import { Spacer } from "@nextui-org/react";

const dela = Dela_Gothic_One({ weight: "400", subsets: ["latin"] });
const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center h-screen"
    >
      <h1 className={`${dela.className} text-2xl md:text-4xl`}>Contact Me</h1>

      <Spacer y={5} />

      <div className="flex flex-col lg:space-x-4 text-center text-md mt-5">
        <AnimatedLink
          href="https://www.linkedin.com/in/muhammad-abdullah-274033229"
          initialText="LinkedIn"
          hoverText="LinkedIn"
        />

        <Spacer y={3} />

        <AnimatedLink
          href="mailto:muhammad.ab2024@gmail.com"
          initialText="Mail"
          hoverText="Mail"
        />

        <Spacer y={3} />

        <AnimatedLink
          href="/cv.pdf"
          download="Muhammad-Abdullah's-CV"
          initialText="Download Resume"
          hoverText="Download Resume"
        />
      </div>
    </section>
  );
};

export default Contact;
