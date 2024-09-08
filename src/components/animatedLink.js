import { motion } from "framer-motion";

import { useState } from 'react';

import { Press_Start_2P } from "next/font/google";

const pixelFont = Press_Start_2P({ weight: "400", subsets: ["latin"] });

const AnimatedLink = ({ href, initialText, hoverText, download }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      download={download}
      className={`${pixelFont.className} relative inline-block text-md md:text-xl overflow-hidden group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.span
        animate={{
          x: isHovered ? "-100%" : "0%", 
          opacity: isHovered ? 0 : 1,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`block ${pixelFont.className} `}
      >
        {initialText}
      </motion.span>
      <motion.span
        animate={{
          x: isHovered ? "0%" : "100%",
          opacity: isHovered ? 1 : 0, 
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`absolute left-0 top-0 w-full h-full flex justify-center items-center`}
      >
        {hoverText}
      </motion.span>
    </a>
  );
};

export default AnimatedLink;
