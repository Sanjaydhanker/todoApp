import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import DailyTask from "./components/DailyTask";
import TodoAppContainer from "./components/TodoAppContainer";
import TodoHeader from "./components/TodoHeader";

function App() {
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
    <>
      <TodoAppContainer>
        <TodoHeader />
        <AddTodo
          task={task}
          handleTextOnChange={handleTextOnChange}
          handleAddClick={handleAddClick}
        />
        <DailyTask taskList={taskList} handleOnDelete={handleOnDelete} />
      </TodoAppContainer>
    </>
  );
}

export default App;
