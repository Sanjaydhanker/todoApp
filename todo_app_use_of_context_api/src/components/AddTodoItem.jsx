import { useContext } from "react";
import { ContextTodoItems } from "../store/todo_items_store";

function AddTodoItem() {
  const contextObj = useContext(ContextTodoItems);
  const addNewTodo = contextObj.addNewTodo;
  const todoItemName = contextObj.todoItemName;
  const dueTodoDate = contextObj.dueTodoDate;
  return (
    <div className="flex items-center justify-content-between gap-3 my-2">
      <section className="flex-2">
        <input
          type="text"
          ref={todoItemName}
          placeholder="Enter Todo"
          className="w-[100%] bg-gray-100 p-2 rounded outline-0"
        />
      </section>
      <section className="flex-2 ">
        <input
          ref={dueTodoDate}
          type="date"
          className="w-[100%] bg-gray-100 p-2 rounded outline-0"
        />
      </section>
      <section className="flex-1">
        <button
          type="button"
          onClick={addNewTodo}
          className="w-[100%] bg-green-600 text-white py-2 rounded hover:bg-green-700 cursor-pointer"
        >
          Add
        </button>
      </section>
    </div>
  );
}

export default AddTodoItem;
