import { createContext } from "react";
import { useEffect, useState } from "react";

export const StoreContext = createContext([]);

const CreateContextProvider = ({ children }) => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleTextOnChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddClick = () => {
    if (task.length === 0) return alert("Please Add Task");
    const newTaskList = [...taskList, task];
    localStorage.setItem("todo", JSON.stringify(newTaskList));
    setTaskList(newTaskList);
    setTask("");
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todo")) || [];
    setTaskList(storedTodos);
  }, []);

  const handleOnDelete = (taskName) => {
    const updatedTask = taskList.filter((todo) => todo !== taskName);
    setTaskList(updatedTask);
    localStorage.setItem("todo", JSON.stringify(updatedTask));
  };

  return (
    <StoreContext.Provider
      value={{
        task: task,
        handleAddClick: handleAddClick,
        handleTextOnChange: handleTextOnChange,
        taskList: taskList,
        handleOnDelete: handleOnDelete,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default CreateContextProvider;
