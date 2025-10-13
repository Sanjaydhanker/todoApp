import React from "react";
import AppName from "./AppName";
import Addtodo from "./Addtodo";
import TodoItem1 from "./TodoItem1";
import TodoItem2 from "./TodoItem2";
ys;
function TodoApp() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-gray-800">
        {/* Box */}
        <div className="w-xl h-auto p-8 bg-gray-400 rounded-xl shadow-xl shadow-indigo-900">
          {/* App Name Compopnent */}
          <AppName />

          {/* Add todo  */}
          <Addtodo />

          {/* Todo item */}
          <TodoItem1 />
          <TodoItem2 />
        </div>
      </div>
    </>
  );
}

export default TodoApp;
