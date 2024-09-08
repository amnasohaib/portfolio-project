import { motion } from "framer-motion";

import Navbar from "@/components/navbar";
import Contact from "@/components/contact";
import Home from "@/components/home";
import About from "@/components/about";

const Main = () => {
  return (
    <>
      <Navbar />

      <motion.div
      className="bg-gradient-to-r from-black via-blue to-red"
      animate={{
        background: [
          "linear-gradient(to right, #ffffff, #4169e1)",
          // "linear-gradient(to right, #4169e1, #ffffff)",
          "linear-gradient(to right, #9B1C31, #ffffff)",
        ],
      }}
      transition={{
        duration: 5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      }}
        // className="bg-gradient-to-r from-black via-blue-500 to-gradient"
        // animate={{
        //   backgroundPosition: ["0% 50%", "100% 50%"],
        //   backgroundSize: ["200% 200%", "200% 200%"],
        // }}
        // transition={{
        //   duration: 5,
        //   ease: "easeInOut",
        //   repeat: Infinity,
        //   repeatType: "reverse",
        // }}
      >
        <Home />

        <About />

        <Contact />

      </motion.div>
    </>
  );
};

export default Main;
