import React from "react";

function TodoItems({ todoItems }) {
  return (
    <>
      <AllTodoItems
        todoName="Go to College"
        todoDate="12/10/2025"
        deleteButton="Delete"
      />
    </>
  );
}

export default TodoItems;
