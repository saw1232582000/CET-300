"use client";

import clsx from "clsx";
import {
  AnimatePresence,
  Variants,
  motion,
  useAnimate,
  useAnimation,
} from "framer-motion";

import { useState } from "react";
import { useSideBar } from "~/context/sidebar-context";

type HoverProps = {
  isHovered: boolean;
  id: string | null;
};

const SideBar = () => {
  const sideBarControl = useAnimation();
  const sidebar = useSideBar();
  const [scope, animate] = useAnimate();
  const [isRouteHovered, setRouteHovered] = useState<HoverProps>({
    isHovered: false,
    id: null,
  });
  const shouldHover = (id: string): boolean => {
    if (isRouteHovered.id == id) {
      return true;
    } else return false;
  };
  const sideBarVariant: Variants = {
    closed: {
      width: 80,
      transition: {
        delay: 0.1,
        type: "spring",
        bounce: 0,
      },
    },
    open: {
      width: 200,
      transition: {
        delay: 0.1,
        type: "spring",
        bounce: 0,
      },
    },
  };

  const toggleArrowVariant: Variants = {
    closed: {
      rotate: "0deg",
      transition: {
        duration: 0.1,
        type: "spring",
        bounce: 0,
      },
    },
    open: {
      rotate: "180deg",
      transition: {
        duration: 0.1,
        type: "spring",
        bounce: 0,
      },
    },
  };

  const sideBarRouteVariants: Variants = {
    closed: {},
  };

  const toggleSideBar = () => {
    if (sidebar.isCollpase) {
      sideBarControl.start("open");
    } else {
      sideBarControl.start("closed");
    }
    sidebar.toggleCollapse(!sidebar.isCollpase);
  };
  return (
    <motion.nav
      initial={sidebar.isCollpase ? "closed" : "open"}
      animate={sideBarControl}
      variants={sideBarVariant}
      className="flex w-full flex-col bg-[#282c3c]"
    >
      <div className={clsx(" flex w-full flex-col place-items-start px-5 justify-start mt-5 transition-all duration-200 ease-out",{
        "":sidebar.isCollpase,
        "":!sidebar.isCollpase
      })}>
        <button className="border rounded-full hover:bg-[#48545c]">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="white"
            className="h-6 w-6 "
            onClick={toggleSideBar}
            variants={toggleArrowVariant}
            initial="closed"
            animate={sidebar.isCollpase ? "closed" : "open"}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </motion.svg>
        </button>
      </div>

      <motion.ul
        transition={{
          duration: 1,
          staggerChildren: 0.5,
        }}
        className={clsx("mt-[20px] flex w-full  flex-col gap-y-5 ",{
          "px-2":sidebar.isCollpase,
          "px-5":!sidebar.isCollpase,
        })}
      >
        {sidebar.routes.map((route) => {
          return (
            <>
              <motion.li
                onMouseEnter={() =>
                  setRouteHovered({ isHovered: true, id: route.route.id })
                }
                onMouseLeave={() =>
                  setRouteHovered({ isHovered: false, id: null })
                }
                initial={{
                  x: -10,
                  y: -10,
                  opacity: 0,
                  backgroundPosition: "0% 0%",
                }}
                animate={{
                  x: 0,
                  y: 0,

                  opacity: 1,
                  transition: {
                    duration: 1,
                    type: "spring",
                    bounce: 0,
                  },
                }}
                whileHover={{
                  // backgroundColor: "#48545c",
                  // borderRadius: 50,

                  // x:sidebar.isCollpase ? 10:30,
                  transition: {
                    duration: 0.2,
                    type: "spring",
                    bounce: 0,
                    ease: "linear",
                  },
                }}
                className={clsx("relative flex w-full justify-center py-3 gap-x-1 group  rounded-[5px]",{
                  "":sidebar.isCollpase,
                  "":!sidebar.isCollpase,
                })}
              >
                <motion.div
                  // ref={scope}
                  style={{
                    clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
                  }}
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                    clipPath: shouldHover(route.route.id)
                      ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                      : "polygon(0 0, 0 0, 0 100%, 0% 100%)",
                      transition:{
                        duration:shouldHover(route.route.id) ? 0.5:0,
                        type:"spring",
                        bounce:0
                      }
                  }}
                  className="absolute inset-0 bg-[#48545c] rounded-[5px]"
                ></motion.div>
                <div className="z-10">{route?.route?.icon}</div>
                <AnimatePresence>
                  {!sidebar.isCollpase && (
                    <motion.span
                      key={route.route.id}
                      initial={{
                        x: -100,
                        opacity: 0,
                      }}
                      animate={{
                        x: shouldHover(route.route.id) ? 20 : 0,
                        opacity: 1,
                        transition: {
                          duration: 0.5,
                          type: "spring",
                          bounce: 0,
                        },
                      }}
                      exit={{
                        x: -20,
                        opacity: 0,
                        transition: {
                          duration: 0.5,
                          type: "spring",
                          bounce: 0,
                        },
                      }}
                      variants={{
                        closed: {},
                      }}
                      className="text-white"
                    >
                      {route?.route?.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.li>
            </>
          );
        })}
      </motion.ul>
    </motion.nav>
  );
};

export default SideBar;
