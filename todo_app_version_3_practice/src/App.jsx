import { useState } from "react";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoAppContainer from "./components/TodoAppContainer";
import TodoItemContainer from "./components/TodoItemContainer";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [todoName, setTodoName] = useState("");
  const [newDate, setNewDate] = useState("");

  const textOnChange = (event) => {
    setTodoName(event.target.value);
  };
  const dateOnChange = (event) => {
    setNewDate(event.target.value);
  };

  const handleAddButton = (event) => {
    let newTodoName = todoName;
    let newTodoDate = newDate;
    let newTodoItems = {
      itemName: newTodoName,
      dueDate: newTodoDate,
    };

    if (!todoName || !newDate) return alert("Please Enter TodoName Or Date");

    // simpleValidation

    let newTodoItemList = [...todoItems, newTodoItems];
    setTodoItems(newTodoItemList);
    setNewDate("");
    setTodoName("");
  };

  const handleOnDelete = (todoItemName) => {
    const newTodoItemsList = todoItems.filter(
      (item) => item.itemName !== todoItemName
    );
    setTodoItems(newTodoItemsList);
  };
  return (
    <TodoAppContainer>
      <AppName />
      <AddTodo
        dateOnChange={dateOnChange}
        textOnChange={textOnChange}
        handleAddButton={handleAddButton}
        todoName={todoName}
        newDate={newDate}
      />
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItemContainer
        todoItems={todoItems}
        handleOnDelete={handleOnDelete}
      />
    </TodoAppContainer>
  );
}

export default App;
