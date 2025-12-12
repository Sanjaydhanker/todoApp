import { useContext } from "react";
import { ContextTodoItems } from "../store/todo_items_store";

function WelcomeMessage() {
  const contextObj = useContext(ContextTodoItems);
  const todoItemsList = contextObj.todoItemsList;
  return (
    <div className="text-2xl font-bold text-white text-center">
      {todoItemsList.length === 0 && "Enjoy Your Day "}
    </div>
  );
}

export default WelcomeMessage;
