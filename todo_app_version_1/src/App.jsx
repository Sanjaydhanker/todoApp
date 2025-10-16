import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoApp from "./todoapp/TodoApp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<TodoApp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
