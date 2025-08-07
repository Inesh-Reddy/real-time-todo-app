import React, { useState } from "react";
import { trpc } from "../../utils/trpc";
import { StatusEnum } from "@repo/shared";

const createTodo = () => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState<StatusEnum>(StatusEnum.Not_Started);
  const newTodo = trpc.todo.createTodo.useMutation();
  const onclickHandler = () => {};
  return (
    <div>
      <select>
        <option value={StatusEnum.Not_Started}>Not_Started</option>
        <option value={StatusEnum.Completed}>Completed</option>
        <option value={StatusEnum.In_Progress}>In_Progress</option>
      </select>
    </div>
  );
};

export default createTodo;
