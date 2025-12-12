import React, { useContext } from "react";
import { ContextTodoItems } from "../store/todo_items_store";

function Item({ todoName, dueDate }) {
  const contextObj = useContext(ContextTodoItems);
  const deleteItem = contextObj.deleteItem;
  return (
    <>
      <div className="flex items-center justify-content-between gap-3 my-2">
        <section className="flex-2">
          <h1 className="w-[100%] text-xl font-semibold text-white p-2">
            {todoName}
          </h1>
        </section>
        <section className="flex-2 ">
          <h1 className="w-[100%] text-xl font-semibold text-white p-2">
            {dueDate}
          </h1>
        </section>
        <section className="flex-1">
          <button
            type="button "
            onClick={() => deleteItem(todoName)}
            className="w-[100%] bg-red-600 text-white py-2 rounded hover:bg-red-700 cursor-pointer"
          >
            Delete
          </button>
        </section>
      </div>
    </>
  );
}

export default Item;
