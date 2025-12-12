import { useRef } from "react";
import { useReducer } from "react";
import { createContext } from "react";

export const ContextTodoItems = createContext([]);

// Pure Function start

const todoItemReducer = (currentTodoItems, action) => {
  let newTodoItems = currentTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currentTodoItems,
      {
        todoName: action.payload.newTodoName,
        dueDate: action.payload.newDueDate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currentTodoItems.filter(
      (item) => item.todoName !== action.payload.deleteTodoName
    );
  }
  return newTodoItems;
};

//pure function add

const TodoItemContextProvider = ({ children }) => {
  const todoItemName = useRef("");
  const dueTodoDate = useRef("");
  // const [todoItemsList, setTodoItemsList] = useState([]);
  const [todoItemsList, dispachTodoItems] = useReducer(todoItemReducer, [
    {
      todoName: "Complete ReactJs",
      dueDate: "14/12/2025",
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

    const newItemAtion = {
      type: "NEW_ITEM",
      payload: {
        newTodoName: newTodoName,
        newDueDate: newDueDate,
      },
    };

    dispachTodoItems(newItemAtion);
  };
  const deleteItem = (deleteTodoName) => {
    const deleteItem = {
      type: "DELETE_ITEM",
      payload: {
        deleteTodoName: deleteTodoName,
      },
    };

    dispachTodoItems(deleteItem);
  };

  return (
    <ContextTodoItems.Provider
      value={{
        todoItemsList: todoItemsList,
        addNewTodo: addNewTodo,
        deleteItem: deleteItem,
        todoItemName: todoItemName,
        dueTodoDate: dueTodoDate,
      }}
    >
      {children}
    </ContextTodoItems.Provider>
  );
};

export default TodoItemContextProvider;
