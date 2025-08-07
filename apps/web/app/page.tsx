"use client";

import { trpc } from "../utils/trpc";

export default function Home() {
  const todo = trpc.todo.getTodos.useQuery();
  console.log(todo.data);
  return (
    <div>
      <pre>{JSON.stringify(todo.data)}</pre>
    </div>
  );
}
