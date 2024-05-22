"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { exportRecord } from "./exportcsv";

const ExportRecord = ({
  allData,
  onePageData,
}: {
  allData: any;
  onePageData: any;
}) => {
  const onDownload = (data: any) => {
    exportRecord(data);
  };
  return (
    <div className="flex w-full">
      <Popover>
        <PopoverTrigger className="flex w-full sm:w-auto">
          <div className="flex w-full cursor-pointer flex-row items-center justify-center gap-x-2 rounded-[6px] border border-black bg-[#F2F2F2] px-2 py-1">
            <span className="flex ">Export CSV</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[20px] w-[20px]"
              viewBox="0 0 576 512"
            >
              <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V288H216c-13.3 0-24 10.7-24 24s10.7 24 24 24H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM384 336V288H494.1l-39-39c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39H384zm0-208H256V0L384 128z" />
            </svg>
          </div>
        </PopoverTrigger>
        <PopoverContent className="flex w-full px-1">
          <div className="flex w-full flex-col items-start gap-y-2">
            <button
              className="flex w-full flex-row items-center gap-x-2 px-3 py-1 hover:bg-[#F2F2F2]"
              onClick={() => onDownload(allData)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              <span>Download all pages</span>
            </button>
            <button
              className="flex w-full flex-row items-center gap-x-2 px-3 py-1 hover:bg-[#F2F2F2]"
              onClick={() => onDownload(onePageData)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              <span>Download current page</span>
            </button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ExportRecord;
