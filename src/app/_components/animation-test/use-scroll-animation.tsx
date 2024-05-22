'use client'

import { motion, useScroll, useSpring} from "framer-motion";

const ScrollAnimation = () => {
  const scrollPercent=useScroll()
  const scaleX=useSpring(scrollPercent.scrollYProgress)
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <motion.div 
      
      style={{
        // scaleX:scrollPercent.scrollYProgress,
        scaleX,
        // transformOrigin:"left",
        background:"blue",
        position:"sticky",
        top:0,
        width:"100%",
        height:"20px",
        
      }}
      >

      </motion.div>
        <div className="w-[200px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quidem
          molestiae eos nobis aperiam earum maiores aliquam nam eveniet
          veritatis corrupti, facilis sit cumque doloremque placeat deleniti.
          Eaque, neque nostrum!
        </div>
        <div className="w-[200px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quidem
          molestiae eos nobis aperiam earum maiores aliquam nam eveniet
          veritatis corrupti, facilis sit cumque doloremque placeat deleniti.
          Eaque, neque nostrum!
        </div>
        <div className="w-[200px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quidem
          molestiae eos nobis aperiam earum maiores aliquam nam eveniet
          veritatis corrupti, facilis sit cumque doloremque placeat deleniti.
          Eaque, neque nostrum!
        </div>
        <div className="w-[200px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quidem
          molestiae eos nobis aperiam earum maiores aliquam nam eveniet
          veritatis corrupti, facilis sit cumque doloremque placeat deleniti.
          Eaque, neque nostrum!
        </div>
        <div className="w-[200px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quidem
          molestiae eos nobis aperiam earum maiores aliquam nam eveniet
          veritatis corrupti, facilis sit cumque doloremque placeat deleniti.
          Eaque, neque nostrum!
        </div>
        <div className="w-[200px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quidem
          molestiae eos nobis aperiam earum maiores aliquam nam eveniet
          veritatis corrupti, facilis sit cumque doloremque placeat deleniti.
          Eaque, neque nostrum!
        </div>
        <div className="w-[200px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quidem
          molestiae eos nobis aperiam earum maiores aliquam nam eveniet
          veritatis corrupti, facilis sit cumque doloremque placeat deleniti.
          Eaque, neque nostrum!
        </div>
        <div className="w-[200px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quidem
          molestiae eos nobis aperiam earum maiores aliquam nam eveniet
          veritatis corrupti, facilis sit cumque doloremque placeat deleniti.
          Eaque, neque nostrum!
        </div>
        <div className="w-[200px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quidem
          molestiae eos nobis aperiam earum maiores aliquam nam eveniet
          veritatis corrupti, facilis sit cumque doloremque placeat deleniti.
          Eaque, neque nostrum!
        </div>
        <div className="w-[200px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quidem
          molestiae eos nobis aperiam earum maiores aliquam nam eveniet
          veritatis corrupti, facilis sit cumque doloremque placeat deleniti.
          Eaque, neque nostrum!
        </div>
        <div className="w-[200px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quidem
          molestiae eos nobis aperiam earum maiores aliquam nam eveniet
          veritatis corrupti, facilis sit cumque doloremque placeat deleniti.
          Eaque, neque nostrum!
        </div>
        <div className="w-[200px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quidem
          molestiae eos nobis aperiam earum maiores aliquam nam eveniet
          veritatis corrupti, facilis sit cumque doloremque placeat deleniti.
          Eaque, neque nostrum!
        </div>
      
    </div>
  );
};

export default ScrollAnimation;
