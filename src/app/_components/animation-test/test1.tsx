"use client";

import { motion } from "framer-motion";

const Test1animation = () => {
  return (
    <div className="flex   w-full bg-blue-500 items-center justify-center py-5">
      <motion.div
        className="h-[50px] w-[50px]"
        initial={{ opacity: 0.6 }}
        animate={{
          scale: [1, 2, 2, 1, 1],
          opacity:1,
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          backgroundColor: "darkseagreen",
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
    </div>
  );
};

export default Test1animation;
