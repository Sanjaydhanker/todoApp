import { use, useState } from "react";
import AddTodo from "./todocomponents/AddTodo";
import AllTodo from "./todocomponents/AllTodo";
import TodoContainer from "./todocomponents/TodoContainer";
import WelcomeMessage from "./todocomponents/WelcomeMessage";
import AppName from "./todocomponents/AppName";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [newTodoDate, setNewTodoDate] = useState("");
  const [todoItems, setTodoItems] = useState([]);

  const textInputOnChange = (e) => {
    setNewTodo(e.target.value);
  };
  const dateInputOnChange = (e) => {
    setNewTodoDate(e.target.value);
  };

  const addOnClickHandle = (e) => {
    e.preventDefault();
    console.log(e);

    let newTodoName = newTodo;
    let newTodoDat = newTodoDate;
    let newTodoItems = {
      name: newTodoName,
      dueDate: newTodoDat,
    };
    if (!newTodo || !newTodoDate)
      return alert("Please Enter TodoName and Date");
    // simple validation
    let newTodoList = [...todoItems, newTodoItems];
    setTodoItems(newTodoList);
    setNewTodoDate("");
    setNewTodo("");
  };

  const handleDeleteButton = (itemName) => {
    let newTodoItems = todoItems.filter((item) => item.name !== itemName);
    setTodoItems(newTodoItems);
    console.log(itemName);
  };
  return (
    <>
      <TodoContainer>
        <AppName />
        <AddTodo
          textInputOnChange={textInputOnChange}
          dateInputOnChange={dateInputOnChange}
          addOnClickHandle={addOnClickHandle}
          todo={newTodo}
          todoDate={newTodoDate}
        />
        {todoItems.length === 0 && <WelcomeMessage />}
        <AllTodo
          todoItems={todoItems}
          handleDeleteButton={handleDeleteButton}
        />
      </TodoContainer>
    </>
  );
}

export default App;
