function AddTodo({ task, handleTextOnChange, handleAddClick }) {
  return (
    <>
      <div className="flex gap-2 ">
        <input
          type="text"
          placeholder="Enter Your Task"
          value={task}
          onChange={handleTextOnChange}
          className="flex-5 border p-2 rounded outline-0"
        />
        <button
          type="button"
          className="flex-1 text-indigo-600 font-bold border px-4 py-2 rounded hover:bg-indigo-500 hover:text-white active:bg-green-600"
          onClick={handleAddClick}
        >
          Add
        </button>
      </div>
    </>
  );
}

export default AddTodo;
