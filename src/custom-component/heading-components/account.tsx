import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";

const Account = () => {
  return (
    <div className="flex">
      <Popover>
        <PopoverTrigger asChild>
          <div className="flex cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>

            <span>Account</span>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          {!"already loggedin" && (
            <div className="flex w-full flex-col items-center ">
              <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[100px] bg-blue-600">
                <span className="text-[20px] text-white">S</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-serif text-[18px]">User name</span>
                <span className="text-[15px] text-gray-500">
                  user@gmail.com
                </span>
              </div>
              <div className="mt-[50px]  w-full">
                <button className="w-full rounded-[5px] bg-blue-400 p-[8px] font-semibold text-white">
                  Logout
                </button>
              </div>
            </div>
          )}
          {"already loggedin" && (
            <div className="flex w-full flex-col items-center ">
              <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[100px] bg-blue-600">
                <span className="text-[20px] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-serif text-[18px]">Login in now</span>
                
              </div>
              <div className="mt-[50px]  w-full">
                <button className="w-full rounded-[5px] bg-blue-400 p-[8px] font-semibold text-white">
                  Login
                </button>
              </div>
            </div>
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Account;
