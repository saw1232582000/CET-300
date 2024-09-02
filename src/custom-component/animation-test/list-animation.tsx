"use client";

import { motion } from "framer-motion";

const items = [
  {
    id: "1",
    name: "item1",
  },
  {
    id: "2",
    name: "item2",
  },
  {
    id: "3",
    name: "item3",
  },
  {
    id: "4",
    name: "item4",
  },
];

const Listanimation = () => {
  return (
    <div className="flex w-full  items-center justify-center py-5">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
      >
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ clipPath: "inset(0% 0% 0% 0% round 10px)", opacity: 1 }}
          transition={{
            type: "spring",
            bounce: 0.1,
            duration: 0.7,
            delayChildren: 0.3,
            staggerChildren: 1,

            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          {items.map((item) => {
            return (
              <motion.li
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 24,
                  delayChildren: 0.3,
                  staggerChildren: 1,
                }}
              >
                <motion.span className="text-[20px] text-blue-500" exit={{ x: "-100vh", opacity: 0 }}>{item.name}</motion.span>
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default Listanimation;
