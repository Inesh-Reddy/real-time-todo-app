"use client";
import { createTRPCReact } from "@trpc/react-query";
import { AppRouter } from "@repo/trpc/server";
export const trpc = createTRPCReact<AppRouter>();
