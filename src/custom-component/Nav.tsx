import { ReactNode } from "react";

const Nav = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full flex-row items-center justify-center bg-[#687887] px-5 py-5 top-0">
      <div className=" absolute left-3">{children}</div>
      <span className="text-pretty font-sans text-[30px] font-bold text-white">
        Toll Gate System
      </span>
    </div>
  );
};

export default Nav;
