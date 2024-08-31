import { Spacer } from "@nextui-org/react";
import { Anta, Inter } from "next/font/google";
import Image from "next/image";

const anta = Anta({ weight: "400", subsets: ["latin"] });

const inter = Inter({ weight: "400", subsets: ["latin"] });

import Cat from "../../public/cat-meme.gif";
import Link from "next/link";

const About = () => {
    return(
        <section
        id="about"
          className="h-screen flex flex-col justify-center items-center m-20 "
        >
          <div className="flex items-center justify-center">
            <Image 
            src={Cat} 
            alt="cat-meme"
            width={250}
            />
          </div>

          <div className="flex flex-col justify-center items-center text-center text-lg">
            <h1 className={`${anta.className} text-4xl`}>About Me</h1>
            <Spacer y={3} />
            <p className={`${inter.className} text-center mr-10 ml-10`}>
              Hi, I&apos;m Muhammad
            </p>

            <Spacer y={1} />

            <p className=" md:mr-60 md:ml-60">
              A cybersecurity student who&apos;s really into web security and
              cyber deception. I enjoy figuring out how to keep websites safe
              and finding smart ways to outmaneuver online threats.{" "}
            </p>

            <Spacer y={1} />

            <p className="md:mr-60 md:ml-60">
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
          </div>
        </section>
    )
}

export default About;