"use client";

import React, { useState } from "react";
import { trpc } from "../../../utils/trpc";
import { StatusEnum } from "@repo/shared";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState<StatusEnum>(StatusEnum.Not_Started);

  const newTodo = trpc.todo.createTodo.useMutation();

  const onChangeStatusHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as StatusEnum;

    if (Object.values(StatusEnum).includes(value)) {
      setStatus(value);
    } else {
      console.warn("Invalid status value:", value);
    }
  };

  const onClickCreateHandler = () => {
    const input = {
      title,
      status,
    };

    newTodo.mutateAsync(input);
  };

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h1>Create Todo</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title (Required)"
        style={{
          display: "block",
          marginBottom: "0.5rem",
          padding: "0.5rem",
        }}
      />

      <select
        value={status}
        onChange={onChangeStatusHandler}
        style={{
          display: "block",
          marginBottom: "0.5rem",
          padding: "0.5rem",
        }}
      >
        <option value={StatusEnum.Not_Started}>Not Started</option>
        <option value={StatusEnum.In_Progress}>In Progress</option>
        <option value={StatusEnum.Completed}>Completed</option>
      </select>

      <button
        onClick={onClickCreateHandler}
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "#2196F3",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Create Todo
      </button>

      <div style={{ marginTop: "1rem" }}>
        <h2>Created Todo</h2>
        <pre style={{ backgroundColor: "#f4f4f4", padding: "1rem" }}>
          {JSON.stringify(newTodo.data, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default CreateTodo;
