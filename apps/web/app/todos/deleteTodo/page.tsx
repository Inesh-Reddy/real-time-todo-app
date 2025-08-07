"use client";
import React, { useRef } from "react";
import { trpc } from "../../../utils/trpc";

const DeleteTodo = () => {
  const idRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const deleteTodo = trpc.todo.deleteTodo.useMutation();

  const OnClickHandler = () => {
    const todoToDelete = {
      id: idRef.current?.value || "",
      title: titleRef.current?.value || "",
    };
    deleteTodo.mutateAsync(todoToDelete);
  };

  return (
    <div>
      <input ref={idRef} placeholder="id: Optional"></input>
      <br></br>
      <input ref={titleRef} placeholder="title: Optional"></input>
      <br></br>
      <button onClick={OnClickHandler}>Delete</button>
      <br></br>
      {deleteTodo.data}
    </div>
  );
};

export default DeleteTodo;
