'use client'


import { motion, Variants } from "framer-motion";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

const AnimationWithBgColor = () => {
  return (
    <div className="flex   w-full bg-red-900 items-center justify-center py-5">
      <motion.div
        className="h-[50px] w-[50px]"
        initial={{ opacity: 0.6 }}
        animate={{
          // scale: [1, 2, 2, 1, 1],
          opacity:1,
          color:['#FFF3C7','#FEC7B4','#FC819E','#F7418F','#FFFFFF'],
          // rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          backgroundColor: "darkseagreen",
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [1, 1, 1, 1, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
    </div>
  )
}

export default AnimationWithBgColor
