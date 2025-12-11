import React from "react";
import { useContext } from "react";
import Item from "./Item";
import { ContextTodoItems } from "../store/todo_items_store";

function TodoItems() {
  const contextObj = useContext(ContextTodoItems);
  const todoItemsList = contextObj.todoItemsList;

  return (
    <>
      {todoItemsList.map((item) => {
        return (
          <Item
            key={item.todoName}
            todoName={item.todoName}
            dueDate={item.dueDate}
          />
        );
      })}
    </>
  );
}

export default TodoItems;
