"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FORM_DEFAULT_STATE } from "node_modules/react-hook-form/dist/constants";
import { useState } from "react";

const BtnControlAnimation = () => {
  const [hide, setHide] = useState<boolean>(false);
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <button
        className="mb-[20px] h-[30px] w-[200px] bg-yellow-300 text-center"
        onClick={() => setHide(!hide)}
      >
        click
      </button>
      <AnimatePresence>
        {hide && (
          <motion.div
            initial={{ rotate: "0deg" }}
            animate={{ rotate: "180deg" ,x:[0,100,200,300,400,],transition:{times:[0.2,0.4,0.6,0.8,1],duration:1,type:'spring',damping:1}}}
        
            transition={{
              duration: 1,
              
              type: "spring",
              damping: "10",
              
            }}
            exit={{
                
                scale:[0.4,0.3,0.2,0.1,0],
                transition:{duration:1,times:[0.2,0.4,0.6,0.7,0.9]},
                rotate:'0deg'
            }}
            className="flex h-[100px] w-[100px] bg-black "
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BtnControlAnimation;
