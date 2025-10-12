import React from "react";

function TodoItem1() {
  let todoName = "Buy Milk";
  let todoDate = "24/10/2025";

  return (
    <>
      <div className="w-full h-auto flex gap-4 my-2">
        <section className="flex-3">
          <h1 className="w-full ms-2 text-lg font-bold">{todoName}</h1>
        </section>
        <section className="flex-2">
          <h1 className="w-full ms-4 text-lg font-bold">{todoDate}</h1>
        </section>
        <section className="flex-1">
          <button
            type="button"
            className="w-20 py-2 bg-red-600 text-white rounded"
          >
            Delete
          </button>
        </section>
      </div>
    </>
  );
}

export default TodoItem1;
