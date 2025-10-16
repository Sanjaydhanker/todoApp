import { use, useState } from "react";
import AddTodo from "./todocomponents/AddTodo";
import AllTodo from "./todocomponents/AllTodo";
import TodoContainer from "./todocomponents/TodoContainer";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [newTodoDate, setNewTodoDate] = useState("");
  const [todoItems, setTodoItems] = useState([
    {
      name: "Milk",
      dueDate: "2025/10/12",
      deleteBtn: "Delete",
    },
  ]);

  const textInputOnChange = (e) => {
    setNewTodo(e.target.value);
  };
  const dateInputOnChange = (e) => {
    setNewTodoDate(e.target.value);
  };

  const addOnClickHandle = (e) => {
    let newTodoName = newTodo;
    let newTodoDat = newTodoDate;
    let newTodoItems = {
      name: newTodoName,
      dueDate: newTodoDat,
      deleteBtn: "Delete",
    };
    if (!newTodo || !newTodoDate) return; // simple validation
    let newTodoList = [...todoItems, newTodoItems];
    setTodoItems(newTodoList);
    setNewTodoDate("");
    setNewTodo("");
  };

  return (
    <>
      <TodoContainer>
        <AddTodo
          textInputOnChange={textInputOnChange}
          dateInputOnChange={dateInputOnChange}
          addOnClickHandle={addOnClickHandle}
          todo={newTodo}
          todoDate={newTodoDate}
        />
        <AllTodo todoItems={todoItems} />
      </TodoContainer>
    </>
  );
}

export default App;
