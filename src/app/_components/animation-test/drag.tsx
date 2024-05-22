"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";

const DrageAnimation = () => {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-200, 0, 200], [1.5, 1, 1.5]);
  return (
    <div className="flex w-full items-center justify-center">
      <motion.div
        style={{
          x,
          scale,
        }}
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        className="size-52 bg-black"
      ></motion.div>
    </div>
  );
};

export default DrageAnimation;
