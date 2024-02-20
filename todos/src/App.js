import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { RiDeleteBin2Fill } from "react-icons/ri";

function App() {
  let [todos, setTodos] = useState([]);
  let [todoInput, setTodoInput] = useState("");
  let [editTodo, setEditTodo] = useState({});
  let [colors, setColor] = useState("red");
  let [numbers, setNumber] = useState("0");
  let [food, setFood] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editTodo.id) {
      const updatedTodos = todos.map((todo) =>
        todo.id === editTodo.id ? { ...todo, title: todoInput } : todo
      );
      setTodos(updatedTodos);
      setEditTodo({});
    } else {
      const addTodo = {
        id: uuidv4(),
        title: todoInput,
        completed: false,
      };
      todos.push(addTodo);
      setTodos(todos);
      console.log(todos);
    }

    setTodoInput("");
  };

  const deleteTodo = (id) => {
    console.log(id);
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    console.log(updatedTodos);
    setTodos(updatedTodos);
  };

  const updateTodo = (todo) => {
    setTodoInput(todo.title);
    setEditTodo(todo);
  };

  return (
    <>
      <div className="App">
        <form onSubmit={handleSubmit} action="">
          <label htmlFor="task">Enter the task</label>
          <br />
          <input
            type="text"
            id="task"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
          />
        </form>
        <b>
          {todos.length < 1 ? (
            <p>You have no tasks to complete</p>
          ) : (
            <p>You have {todos.length} tasks to complete</p>
          )}
        </b>
        <ul>
          {todos.map((todo, index) => (
            <li key={index} style={{ listStyle: "none" }}>
              <input type="checkbox" />
              {todo.title}
              <button onClick={() => deleteTodo(todo.id)}>
                <RiDeleteBin2Fill />
              </button>
              <button onClick={() => updateTodo(todo)}>Edit</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="selectColor">
        <span>Select a color </span>
        <select
          name="colors"
          id="colors"
          onChange={(e) => setColor(e.target.value)}
        >
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="violet">Violet</option>
          <option value="blue">Blue</option>
          <option value="orange">Orange</option>
          <option value="indigo">Indigo</option>
        </select>
        <p style={{ color: colors }}>
          The text will be displayed in {colors} color
        </p>
      </div>

      <div className="evenOdd">
        <label htmlFor="number">Enter the number </label>
        <input
          type="number"
          id="number"
          value={numbers}
          onChange={(e) => setNumber(e.target.value)}
        />
        <br />
        <span>
          {numbers % 2 == 0 ? 
          (<p>The number {numbers} is Even</p>) 
          : 
          (<p>The number {numbers} is Odd</p>)
          }
        </span>
      </div>
    </>
  );
}

export default App;
