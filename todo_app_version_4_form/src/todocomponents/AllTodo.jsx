import React from "react";
import { MdDelete } from "react-icons/md";

function AllTodo({ todoItems, handleDeleteButton }) {
  return (
    <>
      {todoItems.map((items, index) => {
        return (
          <div
            className="w-full h-auto flex items-center gap-4 my-2 "
            key={index}
          >
            <section className="flex-2">
              <h1 className="w-[100%] p-2 text-white text-lg font-bold">
                {items.name}
              </h1>
            </section>
            <section className="flex-2">
              <h1 className="w-[100%] p-2 text-white text-lg font-bold">
                {items.dueDate}
              </h1>
            </section>
            <section className="flex-1">
              <button
                type="button"
                className="w-[100%] py-2 bg-red-600 text-white rounded flex items-center justify-center"
                onClick={() => handleDeleteButton(items.name)}
              >
                Delete
                <MdDelete />
              </button>
            </section>
          </div>
        );
      })}
    </>
  );
}

export default AllTodo;
