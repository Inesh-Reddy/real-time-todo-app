"use client";

import React, { useRef } from "react";
import { trpc } from "../../../utils/trpc";

const DeleteTodo = () => {
  const idRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const deleteTodo = trpc.todo.deleteTodo.useMutation();

  const onClickHandler = () => {
    const todoToDelete = {
      id: idRef.current?.value || "",
      title: titleRef.current?.value || "",
    };

    deleteTodo.mutateAsync(todoToDelete);
  };

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h1>Delete Todo</h1>

      <input
        ref={idRef}
        placeholder="ID (Optional)"
        style={{ display: "block", marginBottom: "0.5rem", padding: "0.5rem" }}
      />

      <input
        ref={titleRef}
        placeholder="Title (Optional)"
        style={{ display: "block", marginBottom: "0.5rem", padding: "0.5rem" }}
      />

      <button
        onClick={onClickHandler}
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "#f44336",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>

      <div style={{ marginTop: "1rem" }}>
        <h2>Delete Result</h2>
        <pre style={{ backgroundColor: "#f4f4f4", padding: "1rem" }}>
          {JSON.stringify(deleteTodo.data, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default DeleteTodo;
