import AddTodo from "./components/AddTodo";
import DailyTask from "./components/DailyTask";
import TodoAppContainer from "./components/TodoAppContainer";
import TodoHeader from "./components/TodoHeader";
import CreateContextProvider from "./store/todo_app_store";

function App() {
  return (
    <>
      <CreateContextProvider>
        <TodoAppContainer>
          <TodoHeader />
          <AddTodo />
          <DailyTask />
        </TodoAppContainer>
      </CreateContextProvider>
    </>
  );
}

export default App;
