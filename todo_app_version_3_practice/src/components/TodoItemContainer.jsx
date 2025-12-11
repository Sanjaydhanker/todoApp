import React from "react";
import TodoItem from "./TodoItem";

function TodoItemContainer({ todoItems, handleOnDelete }) {
  return (
    <div className="w-full h-auto flex flex-wrap">
      {todoItems.map((item) => (
        <TodoItem
          key={item.itemName}
          itemName={item.itemName}
          dueDate={item.dueDate}
          handleOnDelete={handleOnDelete}
        />
      ))}
    </div>
  );
}

export default TodoItemContainer;
