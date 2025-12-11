import AddTodo from "./components/AddTodo";
import AllTodoItems from "./components/AllTodoItems";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";

function App() {
  let todoItems = [
    {
      name: "Buy Milk",
      dueDate: "12/10/2025",
      deleteBtn: "Delete",
    },
    {
      name: "Go to College",
      dueDate: "12/06/2025",
      deleteBtn: "Delete",
    },
    {
      name: "Completed",
      dueDate: "12/10/2025",
      deleteBtn: "Delete",
    },
    {
      name: "Job",
      dueDate: "08/12/2025",
      deleteBtn: "Delete",
    },
  ];
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-gray-800">
        {/* Box */}
        <div className="w-xl h-auto p-8 bg-gray-400 rounded-xl shadow-xl shadow-indigo-900">
          <AppName />
          <AddTodo />

          <AllTodoItems todoItems={todoItems} />
        </div>
      </div>
    </>
  );
}

export default App;
