import React from "react";
import { IoMdAddCircle } from "react-icons/io";

function AddTodo({
  textInputOnChange,
  dateInputOnChange,
  addOnClickHandle,
  todo,
  todoDate,
}) {
  return (
    <form className="w-full h-auto flex gap-4 my-2" onSubmit={addOnClickHandle}>
      <section className="flex-2">
        <input
          type="text"
          placeholder="Enter Todo here"
          className="w-full rounded p-2 bg-gray-200 outline-none"
          value={todo}
          onChange={textInputOnChange}
        />
      </section>
      <section className="flex-2">
        <input
          type="date"
          className="w-full  rounded p-2 bg-gray-200 outline-none"
          value={todoDate}
          onChange={dateInputOnChange}
        />
      </section>
      <section className="flex-1">
        <button className="w-20 py-2  bg-green-600 text-white rounded active:bg-green-700 flex items-center justify-center">
          Add <IoMdAddCircle />
        </button>
      </section>
    </form>
  );
}

export default AddTodo;
