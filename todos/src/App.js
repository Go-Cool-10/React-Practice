import "./App.css";
import { useState } from "react";

function App() {
  let [todos, setTodos] = useState([]);
  let [todoInput, setTodoInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    todos.push(todoInput);
    setTodos(todos);
    console.log(todos);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit} action="">
        <label htmlFor="task">Enter the task</label>
        <input
          type="text"
          id="task"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
      </form>
    </div>
  );
}

export default App;
