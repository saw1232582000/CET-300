"use client";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useRouter } from "next/navigation";

import { Skeleton } from "~/components/ui/skeleton";

const RecordTable = ({
  TableData,
  isLoading,
}: {
  TableData: any;
  isLoading: boolean;
}) => {
  //const data = api.record.getRecords.useQuery().data;
  const router = useRouter();
  const data = TableData;
  const columnHelper = createColumnHelper<any>();
  const column = [
    columnHelper.accessor("No", {
      cell: (info) => (
        <span className="font-sans text-[18px]">
          {parseInt(info.row.id) + 1}
        </span>
      ),
      header: () => <span className="text-[16px]"> No </span>,
    }),
    columnHelper.accessor("license", {
      cell: (info) => (
        <span className="font-sans text-[18px]">{info.getValue()}</span>
      ),
      header: () => <span className="text-[16px]">License </span>,
    }),
    columnHelper.accessor("class", {
      cell: (info) => (
        <span className="font-sans text-[18px]">{info.getValue()}</span>
      ),
      header: () => <span className="text-[16px]">Class </span>,
    }),
    columnHelper.accessor("gateid", {
      cell: (info) => (
        <span className="font-sans text-[18px]">{info.getValue()}</span>
      ),
      header: () => <span className="text-[16px]">Gate Id </span>,
    }),
    columnHelper.accessor("dirFrom", {
      cell: (info) => (
        <span className="font-sans text-[18px]">{info.getValue()}</span>
      ),
      header: () => <span className="text-[16px]">From </span>,
    }),
    columnHelper.accessor("dirTo", {
      cell: (info) => (
        <span className="font-sans text-[18px]">{info.getValue()}</span>
      ),
      header: () => <span className="text-[16px]">To </span>,
    }),
    columnHelper.accessor("charge", {
      cell: (info) => (
        <span className="font-sans text-[18px]">{info.getValue()}</span>
      ),
      header: () => <span className="text-[16px]">Charge </span>,
    }),
    columnHelper.accessor("timedate", {
      cell: (info) => (
        <span className="font-sans text-[18px]">
          {new Date(info.getValue()).toUTCString()}
        </span>
      ),
      header: () => <span className="text-[16px]">TimeDate </span>,
    }),
    columnHelper.accessor("laneid", {
      cell: (info) => (
        <span className="font-sans text-[18px]">{info.getValue()}</span>
      ),
      header: () => <span className="text-[16px]">Lane Id </span>,
    }),
    columnHelper.accessor("Id", {
      cell: (info) => (
        <span className="font-sans text-[18px]">
          <button
            onClick={() =>
              router.push(
                `/dashboard/car-detail?license=${info.row.original.license || ""}&recordId=${info.row.original.Id}`,
              )
            }
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
                d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
              />
            </svg>
          </button>
        </span>
      ),
      header: () => <span className="text-[16px]"> </span>,
    }),
  ];

  const table = useReactTable({
    data: Array.isArray(data) ? data : [data] ?? [],
    columns: column,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="flex w-full flex-col items-center justify-center px-10 pt-10">
      <div className=" relative mb-6  flex w-[calc(100vw-2rem)] flex-col items-start justify-start gap-4 overflow-x-auto rounded-[6px] border  border-[#F2F2F2] md:w-full lg:mb-10">
        <table className=" w-full table-auto flex-col overflow-x-auto text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="sticky top-0 bg-[#F2F2F2] text-xs  uppercase text-gray-800">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} scope="col" className="px-6 py-3">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {data &&
              !isLoading &&
              table?.getRowModel()?.rows?.map((row) => (
                <tr
                  key={row.id}
                  className="border-b-[2px] border-gray-400 bg-white  text-black"
                >
                  {row?.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="justify-center px-6  py-4">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
        {isLoading && (
          <div className="flex w-full flex-col justify-center">
            <div className="flex w-full flex-col items-center justify-center space-y-3">
              <Skeleton className="h-[125px] w-[250px] rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecordTable;
