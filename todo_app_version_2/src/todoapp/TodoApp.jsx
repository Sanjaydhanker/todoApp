import React from "react";
import AppName from "./AppName";
import Addtodo from "./Addtodo";
import AllTodoItems from "./AllTodoItems";
function TodoApp() {
  let todoItems = [
    {
      name: "Buy Milk",
      dueDate: "12/10/2025",
      deleteBtn: "Delete",
    },
    {
      name: "Go to College",
      dueDate: "12/06/2025",
      deleteBtn: "Delete",
    },
    {
      name: "Completed",
      dueDate: "12/10/2025",
      deleteBtn: "Delete",
    },
  ];

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

          {todoItems.map((items) => (
            <AllTodoItems
              key={items.name}
              todoName={items.name}
              todoDate={items.dueDate}
              deleteButton={items.deleteBtn}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default TodoApp;
