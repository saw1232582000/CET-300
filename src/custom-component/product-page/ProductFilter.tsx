"use client";

import { SelectTrigger } from "@radix-ui/react-select";
import clsx from "clsx";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
} from "~/components/ui/select";

const ProductFilter = () => {
  const [filterList, setFilterList] = useState<string[]>([]);
  return (
    <div className="flex w-full gap-x-4">
      <Select
        value=""
        onValueChange={(value: string) => {
          if (
            !filterList?.find(
              (currentSelectedFilter) => currentSelectedFilter == value,
            )
          ) {
            setFilterList([...filterList, value]);
          }
        }}
      >
        <SelectTrigger className="w-[120px] rounded-[5px] border-2 ">
          <div
            className={clsx(
              " flex items-center justify-center gap-x-4 rounded-[5px] p-[5px]",
              {
                "bg-black text-white": filterList.length > 0,
                "bg-white text-black": filterList.length == 0,
              },
            )}
          >
            <span>Filter</span>
            {filterList.length > 0 && (
              <div
                className={clsx(
                  "flex h-[20px] w-[20px] items-center justify-center rounded-[100px] border-[1px] bg-white text-black",
                  {
                    
                  },
                )}
              >
                <span>{filterList.length}</span>
              </div>
            )}
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      {filterList.length > 0 && (
        <div className="flex w-[400px] gap-x-2 overflow-x-auto border-l-2 pl-[5px]">
          {filterList.map((value, index) => {
            return (
              <div key={index} className="flex items-center border-2 p-[5px]">
                <span>{value}</span>
                <div
                  onClick={() => {
                    setFilterList(
                      filterList.filter(
                        (currentFilter) => currentFilter != value,
                      ),
                    );
                  }}
                >
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
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductFilter;
