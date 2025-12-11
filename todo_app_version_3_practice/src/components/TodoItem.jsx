import { MdOutlineDelete } from "react-icons/md";

function TodoItem({ itemName, dueDate, handleOnDelete }) {
  return (
    <>
      <div className="flex w-full my-3 items-center gap-2">
        <section className="flex-2">
          <h1 className="w-full text-lg font-bold">{itemName}</h1>
        </section>
        <section className="flex-2">
          <h1 className="w-full text-lg font-bold">{dueDate}</h1>
        </section>
        <section className="flex-1">
          <button
            type="button"
            className="w-full px-2 py-2 font-semibold bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer flex items-center"
            onClick={() => handleOnDelete(itemName)}
          >
            <MdOutlineDelete />
            Delete
          </button>
        </section>
      </div>
    </>
  );
}

export default TodoItem;
