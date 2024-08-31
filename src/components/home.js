import { Spacer } from "@nextui-org/react";
import AnimatedLink from "./animatedLink";
import { Anta } from "next/font/google";

const anta = Anta({ weight: "400", subsets: ["latin"] });

const Home = () => {
    return(
<section
          id="home"
          className="flex flex-col justify-center items-center h-screen"
        >
          <h1 className={`${anta.className} text-4xl`}>Muhammad Abdullah</h1>

          <Spacer y={5} />

          <div className="flex flex-col text-center text-lg mt-5">
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