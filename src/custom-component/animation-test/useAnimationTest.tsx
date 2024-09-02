"use client";

import { AnimatePresence, Variants, motion, useAnimationControls } from "framer-motion";
import { useState } from "react";

const FramerHooksTest = () => {
  const [testState, setTestState] = useState<string>("open");
  const [isOpen,setOpen]=useState<boolean>(false)
  const control=useAnimationControls()
  const toggleBtn = () => {
    // if (testState == "open") setTestState("closed");
    // else setTestState("open");
    if(isOpen){
        setOpen(false);
        control.start('closed')
    }
    else{
        setOpen(true)
        control.start('open')
    }
  };
  const variant: Variants = {
    open: {
      opacity: 0,
      y: 0,
      transition: { type: "spring", damping: 40 },
    },
    closed: {
      opacity: 1,
      y: 10,
      transition: { duration: 1 ,type:'spring',damping:20},
    },
  };
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <button className="h-[20px] w-[200px] bg-black" onClick={toggleBtn}>Click</button>
      <motion.div
        className="h-[100px] w-[100px] bg-red-600"
        initial='open'
        animate={control}
        variants={variant}
      ></motion.div>
    </div>
  );
};

export default FramerHooksTest;
