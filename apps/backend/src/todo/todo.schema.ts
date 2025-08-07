import { StatusValues } from '@repo/shared';
import { z } from 'zod';

export const StatusZ = z.enum(StatusValues as [string, ...string[]]);
export const zTodo = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string(),
  priority: z.string(),
  status: StatusZ,
});

export const zCreateTodo = z.object({
  title: z.string(),
  status: StatusZ.optional(),
});

export const zUpdateTodo = z.object({
  id: z.string().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
  priority: z.string().optional(),
  status: StatusZ.optional(),
});

export const zDeleteTodo = z.object({
  id: z.string().optional(),
  title: z.string().optional(),
});
