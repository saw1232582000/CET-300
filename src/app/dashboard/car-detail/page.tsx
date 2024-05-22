"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { recordRouter } from "~/server/api/routers/record";
import { api } from "~/trpc/react";

const CarDetail = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const license = searchParams.get("license");
  const recordId = searchParams.get("recordId");
  const car = api.record.getCarDetail.useQuery({
    license: license || "",
  });
  const record = api.record.getRecordDetail.useQuery({
    recordId: recordId || "",
  });
  console.log(car);
  console.log(record);

  return (
    <div className="flex w-full flex-col items-center justify-center p-10  sm:flex-row">
      <Card className="flex w-full flex-col items-center sm:w-[800px]">
        <CardHeader className="flex w-full items-center justify-center">
          <CardTitle className="flex w-full flex-row items-center justify-center font-sans text-[30px] font-bold">
            <div className="relative flex w-full items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="absolute left-0 flex h-9 w-9 cursor-pointer justify-start rounded-full p-1 hover:bg-slate-300"
                onClick={() => router.back()}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
              <div>Car Details</div>
            </div>
          </CardTitle>
          <CardDescription>
            {/* Deploy your new project in one-click. */}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex w-full flex-col justify-center gap-x-5 gap-y-2 sm:flex-row">
          <div className="flex  items-center justify-center ">
            <Dialog>
              <DialogTrigger>
                <Image
                  alt="invalid image"
                  width={381}
                  height={249}
                  className="sm:border-r-2 sm:p-5"
                  src={record?.data?.imagepath || ""}
                />
              </DialogTrigger>
              <DialogContent className="flex h-auto w-full flex-col rounded-none p-0 sm:w-[1000px] sm:rounded-none">
                <Image
                  alt="invalid image"
                  width={1280}
                  height={1080}
                  className=" flex h-auto w-full"
                  src={record?.data?.imagepath || ""}
                />
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex w-full flex-col font-semibold">
            <span className="text-[25px]">
              License:{" "}
              <span className="font-bold">{license || "no license"}</span>
            </span>
            <span className="text-[25px]">
              Class:{" "}
              <span className="font-bold text-black">
                {record?.data?.class}
              </span>
            </span>
            <span></span>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between"></CardFooter>
      </Card>
    </div>
  );
};

export default CarDetail;
