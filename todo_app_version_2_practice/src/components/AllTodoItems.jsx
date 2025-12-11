import React from "react";
import TodoItems from "./TodoItems";

function AllTodoItems({ todoItems }) {
  return (
    <div>
      {todoItems.map((items) => (
        <TodoItems
          key={items.name}
          todoName={items.name}
          todoDate={items.dueDate}
          deleteButton={items.deleteBtn}
        />
      ))}
    </div>
  );
}

export default AllTodoItems;
