"use client";
import Submit from "@/components/custom/SubmitButton";
import { CreateTodo } from "@/app/action/actions";
import React from "react";
import { Input } from "../ui/input";

const TodoForm = () => {
  //   const [state, action, isPending] = useActionState(CreateTodo, null);
  return (
    <form
      action={CreateTodo}
      className="flex items-center justify-center gap-2"
    >
      <Input type="text" name="todo" placeholder="Add todo..." />
      <Submit />
    </form>
  );
};

export default TodoForm;
