
import { createTRPCRouter } from "~/server/api/trpc";
import {  recordRouter } from "./routers/record";
import { mailRouter } from "./routers/email";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  
  record:recordRouter,
  mail:mailRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
