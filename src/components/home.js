import { Spacer } from "@nextui-org/react";
import AnimatedLink from "./animatedLink";
import { Dela_Gothic_One } from "next/font/google";

const dela = Dela_Gothic_One({ weight: "400", subsets: ["latin"] });

const Home = () => {
    return(
<section
          id="home"
          className="flex flex-col justify-center items-center h-screen"
        >
          <h1 className={`${dela.className} text-2xl md:text-4xl`}>Muhammad Abdullah</h1>

          <Spacer y={5} />

          <div className="flex flex-col text-center mt-5">
            <AnimatedLink
              href="#about"
              initialText="About Me"
              hoverText="About Me"
            />

            <Spacer y={3} />

            <AnimatedLink
              href="#contact"
              initialText="Contact"
              hoverText="Contact"
            />
          </div>
        </section>
    )
}

export default Home;