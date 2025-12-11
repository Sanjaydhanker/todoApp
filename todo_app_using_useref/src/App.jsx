import { useState } from "react";
import AddTodoItem from "./components/AddTodoItem";
import AppContainer from "./components/AppContainer";
import AppName from "./components/AppName";
import Item from "./components/Item";
import { useRef } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const todoItemName = useRef("");
  const dueTodoDate = useRef("");
  const [todoItemsList, setTodoItemsList] = useState([]);

  const handleAddButton = (event) => {
    const newTodoName = todoItemName.current.value;
    const newDueDate = dueTodoDate.current.value;
    todoItemName.current.value = "";
    dueTodoDate.current.value = "";
    if (!newTodoName || !newDueDate) {
      return alert("Please enter todoname or date");
    }
    const newTodoList = [
      ...todoItemsList,
      {
        todoName: newTodoName,
        dueDate: newDueDate,
      },
    ];
    setTodoItemsList(newTodoList);
  };
  const handleDeleteButton = (deleteTodoName) => {
    const filterTodoList = todoItemsList.filter(
      (item) => item.todoName !== deleteTodoName
    );
    setTodoItemsList(filterTodoList);
  };
  return (
    <>
      <AppContainer>
        <AppName />
        <AddTodoItem
          todoItemName={todoItemName}
          dueTodoDate={dueTodoDate}
          handleAddButton={handleAddButton}
        />
        {todoItemsList.length === 0 && <WelcomeMessage />}
        {todoItemsList.map((item) => {
          return (
            <Item
              key={item.todoName}
              todoName={item.todoName}
              dueDate={item.dueDate}
              handleDeleteButton={handleDeleteButton}
            />
          );
        })}
      </AppContainer>
    </>
  );
}

export default App;
