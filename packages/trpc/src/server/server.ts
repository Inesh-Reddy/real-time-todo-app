import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();
const publicProcedure = t.procedure;

const appRouter = t.router({
  todo: t.router({
    getTodos: publicProcedure.output(z.object({
      id: z.string().optional(),
      title: z.string(),
      description: z.string(),
      priority: z.string(),
      status: z.enum(StatusValues as [string, ...string[]]),
    })).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any)
  })
});
export type AppRouter = typeof appRouter;

