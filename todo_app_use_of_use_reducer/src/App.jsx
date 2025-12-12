import AddTodoItem from "./components/AddTodoItem";
import AppContainer from "./components/AppContainer";
import AppName from "./components/AppName";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemContextProvider from "./store/todo_items_store";
import TodoItems from "./components/TodoItems";

function App() {
  return (
    <>
      <TodoItemContextProvider>
        <AppContainer>
          <AppName />
          <AddTodoItem />
          <WelcomeMessage />
          <TodoItems />
        </AppContainer>
      </TodoItemContextProvider>
    </>
  );
}

export default App;
