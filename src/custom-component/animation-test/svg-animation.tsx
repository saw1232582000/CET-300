"use client";

import { Variants, motion } from "framer-motion";

const SvgAnimation = () => {
  const variant: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,

        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };
  return (
    <div className="flex w-full items-center justify-center">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-20 w-20"
        initial="hidden"
        animate="visible"
      >
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 12.75 6 6 9-13.5"
          variants={variant}
        />
      </motion.svg>
    </div>
  );
};

export default SvgAnimation;
