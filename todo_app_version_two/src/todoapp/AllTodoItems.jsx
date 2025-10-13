import React from "react";

function AllTodoItems({ todoName, todoDate, deleteButton }) {
  return (
    <>
      <div className="w-full h-auto flex gap-4 my-2">
        <section className="flex-3">
          <h1 className="w-full ms-2 text-lg font-bold">
            {todoName || "Todo Name"}
          </h1>
        </section>
        <section className="flex-2">
          <h1 className="w-full ms-4 text-lg font-bold">
            {todoDate || "24/10/2025"}
          </h1>
        </section>
        <section className="flex-1">
          <button
            type="button"
            className="w-20 py-2 bg-red-600 text-white rounded"
          >
            {deleteButton || "Delete"}
          </button>
        </section>
      </div>
    </>
  );
}

export default AllTodoItems;
