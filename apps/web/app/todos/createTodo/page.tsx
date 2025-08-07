"use client";
import React, { useState } from "react";
import { trpc } from "../../../utils/trpc";
import { StatusEnum } from "@repo/shared";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState<StatusEnum>(StatusEnum.Not_Started);

  const newTodo = trpc.todo.createTodo.useMutation();

  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as string;
    if (Object.values(StatusEnum).includes(value as StatusEnum)) {
      setStatus(value as StatusEnum);
    } else {
      console.warn("Invalid status value:", value);
    }
  };
  const onClickButtonHandler = () => {
    const input = {
      title: title,
      status: status,
    };
    newTodo.mutateAsync(input);
    console.log(newTodo);
  };

  return (
    <div>
      <input
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="Title: required"
      ></input>
      <br></br>
      <select value={status} onChange={onChangeHandler}>
        <option value={StatusEnum.Not_Started}>Not_Started</option>
        <option value={StatusEnum.Completed}>Completed</option>
        <option value={StatusEnum.In_Progress}>In_Progress</option>
      </select>
      <br></br>
      <button onClick={onClickButtonHandler}>Create Todo</button>

      <div>{JSON.stringify(newTodo.data)}</div>
    </div>
  );
};

export default CreateTodo;
