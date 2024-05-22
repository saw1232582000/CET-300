"use client";

import React from "react";
import RecordTable from "./record-table";
import SearchInput from "~/app/_components/search-components/search-input";
import { SearchParamType } from "~/Global-type/Search-Param";
import DateFilter from "~/app/_components/search-components/date-filter";
import { useSearchParams } from "next/navigation";
import { api } from "~/trpc/react";
import PaginationComponent from "~/app/_components/pagination";
import SelectFilter from "~/app/_components/search-components/select-filter";
import ExportRecord from "./export-record";
import { sendTestMail } from "~/lib/util/test-send-email";

const selectProps: { key: string; value: string }[] = [
  { key: "All Gates", value: "all" },
  { key: "1", value: "1" },
  { key: "2", value: "2" },
  { key: "3", value: "3" },
  { key: "4", value: "4" },
  { key: "5", value: "5" },
];
const searchQuery: SearchParamType[] = [
  {
    ParamName: "license",
    ParamValue: "",
  },
  {
    ParamName: "startDate",
    ParamValue: "",
  },
  {
    ParamName: "endDate",
    ParamValue: "",
  },
  {
    ParamName: "gateId",
    ParamValue: "",
  },
];

const Record = () => {
  const searchParams = useSearchParams();
  const items_per_page = 5;
  const currentPageNo = (searchParams.get("pageno") || 1) as number;
  const skipSize = (currentPageNo - 1) * items_per_page;
  const license = searchParams.get("license");
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  const gateId = searchParams.get("gateId");
  const allRecord = api.record.getRecords.useQuery();
  const recordCount =
    api.record.getRecordsCountWithPagination.useQuery({
      license: license || "",
      startDate: startDate || "12/12/2010",
      endDate: endDate
        ? endDate + " 24:00:00"
        : new Date().toDateString() + " 24:00:00",
      gateId: gateId === "all" ? "" : gateId || "",
    }).data || 0;
  const totalPages =
    Math.floor(recordCount / items_per_page) +
    (recordCount % items_per_page ? 1 : 0);

  const records = api.record.getRecordsWithPagination.useQuery({
    license: license || "",
    startDate: startDate || "12/12/2010",
    endDate: endDate
      ? endDate + " 24:00:00"
      : new Date().toDateString() + " 24:00:00",
    gateId: gateId === "all" ? "" : gateId || "",
    skip_size: skipSize,
    take_size: items_per_page,
  });
  

  const onSend = async() => {
    
   await sendTestMail()
    
  };
  return (
    <div className="mt-7 flex w-full flex-col items-center">
      {/* <button onClick={onSend}>Send Email</button> */}
      <div className=" flex w-full justify-start px-10">
        <ExportRecord allData={allRecord.data} onePageData={records.data} />
      </div>
      <div className="mt-2 flex w-full flex-col items-start justify-start gap-x-4 gap-y-2 px-10 sm:flex-row">
        <SearchInput
          searchQuery={searchQuery}
          path="/dashboard/record"
          keyWord="license"
        />
        <div className=" flex w-full flex-row items-center justify-start gap-x-2 gap-y-2 sm:w-auto">
          <SelectFilter
            searchQuery={searchQuery}
            path="/dashboard/record"
            keyWord="gateId"
            selectProps={selectProps}
          />
        </div>
        <div className=" flex w-full flex-row items-center justify-start gap-x-2 gap-y-2 sm:w-auto">
          <span className="flex w-1/3 justify-start sm:w-auto">
            Start Date:
          </span>
          <div className="flex w-2/3 items-start justify-start sm:w-auto">
            <DateFilter
              searchQuery={searchQuery}
              path="/dashboard/record"
              keyWord="startDate"
            />
          </div>
        </div>
        <div className=" flex w-full flex-row items-center justify-start gap-x-2 gap-y-2 sm:w-auto">
          <span className="flex w-1/3 justify-start sm:w-auto">End Date:</span>
          <div className="flex w-2/3 items-start justify-start sm:w-auto">
            <DateFilter
              searchQuery={searchQuery}
              path="/dashboard/record"
              keyWord="endDate"
            />
          </div>
        </div>
      </div>

      <RecordTable TableData={records.data} isLoading={records?.isLoading} />
      <PaginationComponent
        searchQuery={searchQuery}
        path="/dashboard/record"
        keyWord="pageno"
        totalPages={totalPages}
      />
    </div>
  );
};

export default Record;
