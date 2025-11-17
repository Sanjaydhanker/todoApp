import React from "react";

function AddTodo() {
  return (
    <div className="w-full h-auto flex gap-4 my-2">
      <section className="flex-3">
        <input
          type="text"
          placeholder="Enter Todo here"
          className="w-full rounded p-2 bg-gray-200 outline-none"
        />
      </section>
      <section className="flex-2">
        <input
          type="date"
          className="w-full  rounded p-2 bg-gray-200 outline-none"
        />
      </section>
      <section className="flex-1">
        <button
          type="button"
          className="w-20 py-2  bg-green-600 text-white rounded"
        >
          Add
        </button>
      </section>
    </div>
  );
}

export default AddTodo;
