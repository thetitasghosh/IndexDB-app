"use client";
import React, { useState } from "react";
import { DeleteTodo, CheckedTodo } from "@/app/action/actions";
import { Trash, SquareCheck, Square } from "lucide-react";
import { useLiveQuery } from "dexie-react-hooks";
import IndexDB from "@/lib/IndexDB";
import { cn } from "@/lib/utils";

const TodoList = () => {
  // Fetch the data using useLiveQuery from Dexie.js
  const [check, setCheck] = useState(false);
  const ToggleTodo = (id) => {
    setCheck(!check);
    CheckedTodo(id, check);
  };
  const Alltodo = useLiveQuery(() => IndexDB.todos.toArray()); // Retrieve all todos from the `todos` table
  // Handle the case where data is still loading
  if (!Alltodo) return <div>Loading...</div>;

  return (
    <div>
      {/* Check if there are todos */}
      {Alltodo.length > 0 ? (
        Alltodo.map((todo, i) => (
          <h1
            className="w-full px-2 flex items-center justify-between border rounded-md my-2"
            key={i}
          >
            <div
              onClick={() => ToggleTodo(todo.id)}
              className="size-5 flex items-center justify-center "
            >
              {todo.checked === true ? (
                <SquareCheck className="size-6" />
              ) : (
                <Square className="size-6" />
              )}
            </div>
            <span
              className={cn("", {
                "line-through": todo.checked === true,
              })}
            >
              {todo.todo}
            </span>
            <Trash
              onClick={() => DeleteTodo(todo.id)}
              className="text-red-600 size-4 cursor-pointer"
            />
          </h1> // Assuming 'name' is a property in each todo
        ))
      ) : (
        <p>No todos available</p> // If no todos exist
      )}
    </div>
  );
};

export default TodoList;
