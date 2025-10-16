import React from "react";

function AllTodo({ todoItems, handleDeleteButton }) {
  return (
    <>
      {todoItems.map((items, index) => {
        return (
          <div
            className="w-full h-auto flex items-center gap-4 my-2 "
            key={index}
          >
            <section className="flex-3">
              <h1 className="w-full ms-2 text-lg font-bold">{items.name}</h1>
            </section>
            <section className="flex-2">
              <h1 className="w-full ms-4 text-lg font-bold">{items.dueDate}</h1>
            </section>
            <section className="flex-1">
              <button
                type="button"
                className="w-20 py-2 bg-red-600 text-white rounded"
                onClick={() => handleDeleteButton(items.name)}
              >
                Delete
              </button>
            </section>
          </div>
        );
      })}
    </>
  );
}

export default AllTodo;
