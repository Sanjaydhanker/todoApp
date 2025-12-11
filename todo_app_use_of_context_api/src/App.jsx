import { useState } from "react";
import AddTodoItem from "./components/AddTodoItem";
import AppContainer from "./components/AppContainer";
import AppName from "./components/AppName";
import { useRef } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { ContextTodoItems } from "./store/todo_items_store";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItemName = useRef("");
  const dueTodoDate = useRef("");
  const [todoItemsList, setTodoItemsList] = useState([
    {
      todoName: "TodoName",
      dueDate: "date",
    },
  ]);

  const addNewTodo = (event) => {
    const newTodoName = todoItemName.current.value;
    const newDueDate = dueTodoDate.current.value;
    todoItemName.current.value = "";
    dueTodoDate.current.value = "";
    if (!newTodoName || !newDueDate) {
      return alert("Please enter todoname or date");
    }
    // const newTodoList = [
    //   ...todoItemsList,
    //   {
    //     todoName: newTodoName,
    //     dueDate: newDueDate,
    //   },
    // ];

    // functional upadates
    setTodoItemsList((currentList) => [
      ...currentList,
      {
        todoName: newTodoName,
        dueDate: newDueDate,
      },
    ]);
  };
  const deleteItem = (deleteTodoName) => {
    const filterTodoList = todoItemsList.filter(
      (item) => item.todoName !== deleteTodoName
    );
    setTodoItemsList(filterTodoList);
  };

  return (
    <>
      <ContextTodoItems.Provider
        value={{
          todoItemsList: todoItemsList,
          addNewTodo: addNewTodo,
          deleteItem: deleteItem,
          todoItemName: todoItemName,
          dueTodoDate: dueTodoDate,
        }}
      >
        <AppContainer>
          <AppName />
          <AddTodoItem />
          <WelcomeMessage />
          <TodoItems />
        </AppContainer>
      </ContextTodoItems.Provider>
    </>
  );
}

export default App;
