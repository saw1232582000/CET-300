import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { prisma } from "~/server/db";

export const recordRouter = createTRPCRouter({
  getRecords: publicProcedure.query(async ({ ctx }) => {
    try {
      const records = await prisma.record.findMany({});
      return records;
    } catch (e: unknown) {
      throw new Error("unable to get records");
    }
  }),
  getRecordsWithPagination: publicProcedure
    .input(
      z.object({
        startDate: z.string(),
        endDate: z.string(),
        take_size: z.number(),
        skip_size: z.number(),
        license: z.string().default(""),
        gateId:z.string().default(""),
      }),
    )
    .query(async ({ ctx, input }) => {
      try {
        const records = await ctx.prisma.record.findMany({
          skip: input.skip_size,
          take: input.take_size,
          where: {
            license: {
              contains: input.license,
            },
            gateid:{
              contains:input.gateId
            },
            timedate: {
              gte: new Date(input.startDate),
              lte: new Date(input.endDate),
            },
          },
          orderBy:{
            timedate:"desc"
          }
        });

        return records;
      } catch (e: unknown) {
        return null;
      }
    }),
  getRecordsCountWithPagination: publicProcedure
    .input(
      z.object({
        startDate: z.string(),
        endDate: z.string(),
        license: z.string().default(""),
        gateId:z.string().default("")
      }),
    )
    .query(async ({ ctx, input }) => {
      try {
        console.log("Raw end date:"+input.endDate)
        console.log("end date:"+new Date(input.endDate))
        const records = await ctx.prisma.record.count({
          where: {
            license: {
              contains: input.license,
            },
            gateid:{
              contains:input.gateId
            },
            timedate: {
              gte: new Date(input.startDate),
              lte: new Date(input.endDate),
            },
          },
        });

        return records;
      } catch (e: unknown) {
        return null;
      }
    }),
    getCarDetail:publicProcedure
    .input(
      z.object({
        license:z.string()
      })
    )
    .query(async({ctx,input})=>{
      try{
        const car=await ctx.prisma.car_detail.findFirst({
          where:{
            license:input.license
          }
        })
        
        return car;
      }catch(e:unknown){
        throw new Error("unable to get car detail");
      }
    }),
    getRecordDetail:publicProcedure
    .input(
      z.object({
        recordId:z.string()
      })
    )
    .query(async({ctx,input})=>{
      try{
        const record=await ctx.prisma.record.findFirst({
          where:{
            Id:input.recordId
          }
        });
        return record;
      }catch(e:unknown){
        throw new Error("unable to get record detail");
      }
    }),
});
