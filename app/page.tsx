import React from "react";
import AppLayout from "@/components/layout/AppLayout";
import TodoForm from "@/components/form/todo-form";
import TodoList from "@/components/layout/TodoList";
const Home = () => {
  return (
    <AppLayout>
      <div className="w-[30rem] flex items-center gap-5 justify-start p-5 flex-col h-full border rounded-md">
        <div id="header">
          <h1 className="text-3xl">Add Todos</h1>
        </div>
        <div id="form">
          <TodoForm />
        </div>
        <div id="todos" className="border w-full h-full p-2 rounded-md">
          <TodoList />
        </div>
      </div>
    </AppLayout>
  );
};

export default Home;
