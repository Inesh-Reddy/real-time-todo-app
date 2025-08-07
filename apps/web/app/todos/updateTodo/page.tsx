"use client";

import React, { useRef } from "react";
import { trpc } from "../../../utils/trpc";

const UpdateTodo = () => {
  const idRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const updatedTodo = trpc.todo.updateTodo.useMutation();

  const onClickHandler = () => {
    const todoToUpdate = {
      id: idRef.current?.value || "",
      title: titleRef.current?.value || "",
    };

    updatedTodo.mutateAsync(todoToUpdate);
  };

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h1>Update Todo</h1>

      <input
        ref={idRef}
        placeholder="ID (Required)"
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
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Update
      </button>

      <div style={{ marginTop: "1rem" }}>
        <h2>Updated Todo</h2>
        <pre style={{ backgroundColor: "#f4f4f4", padding: "1rem" }}>
          {JSON.stringify(updatedTodo.data, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default UpdateTodo;
