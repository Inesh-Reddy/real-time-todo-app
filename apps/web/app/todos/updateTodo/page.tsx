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
    <div>
      <input ref={idRef} placeholder="id: Required"></input>
      <br></br>
      <input ref={titleRef} placeholder="title: Optional"></input>
      <br></br>
      <button onClick={onClickHandler}>Update</button>
      <br></br>
      <div>
        <h2>Updated Todo</h2>
        <p>{JSON.stringify(updatedTodo.data)}</p>
      </div>
    </div>
  );
};

export default UpdateTodo;
