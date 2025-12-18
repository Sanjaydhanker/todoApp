import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { StoreContext } from "../store/todo_app_store";

function DailyTask() {
  const { taskList, handleOnDelete } = useContext(StoreContext);
  return (
    <>
      <ul className="space-y-2">
        {taskList.map((taskName) => {
          return (
            <li
              className="flex items-center justify-between bg-slate-50 px-3 mt-2 "
              key={taskName}
            >
              <div className="flex items-center gap-x-2">
                <input type="checkbox" />
                <span className="font-bold text-lg text-green-700">
                  {taskName}
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleOnDelete(taskList.id)}
                className="text-red-500 text-3xl cursor-pointer hover:text-red-600"
              >
                <MdDelete />
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default DailyTask;
