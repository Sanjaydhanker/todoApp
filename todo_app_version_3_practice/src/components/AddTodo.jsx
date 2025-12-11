import React from "react";
import { IoMdAddCircle } from "react-icons/io";

function AddTodo({
  textOnChange,
  dateOnChange,
  handleAddButton,
  todoName,
  newDate,
}) {
  return (
    <div className="w-full flex gap-2">
      <section className="flex-2">
        <input
          className=" p-2 w-full outline-0 border-2 rounded border-indigo-600"
          type="text"
          placeholder="Enter Todo"
          value={todoName}
          onChange={textOnChange}
        />
      </section>
      <section className="flex-2">
        <input
          className=" p-2 w-full outline-0 border-2 rounded border-indigo-600"
          type="date"
          value={newDate}
          onChange={dateOnChange}
        />
      </section>
      <section className="flex-1">
        <button
          type="button"
          className="py-2 px-3 w-full bg-indigo-600 text-white border-2 rounded border-indigo-600 hover:bg-indigo-700 cursor-pointer font-semibold flex items-center"
          onClick={handleAddButton}
        >
          <IoMdAddCircle />
          ADD
        </button>
      </section>
    </div>
  );
}

export default AddTodo;
