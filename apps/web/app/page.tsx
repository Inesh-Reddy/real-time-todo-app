"use client";

import { trpc } from "../utils/trpc";

export default function Home() {
  const todo = trpc.todo.getTodos.useQuery();

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h1>All Todos</h1>

      {todo.isLoading && <p>Loading...</p>}
      {todo.error && (
        <p style={{ color: "red" }}>Error: {todo.error.message}</p>
      )}

      <pre
        style={{
          backgroundColor: "#f4f4f4",
          padding: "1rem",
          marginTop: "1rem",
          overflowX: "auto",
        }}
      >
        {JSON.stringify(todo.data, null, 2)}
      </pre>
    </div>
  );
}
