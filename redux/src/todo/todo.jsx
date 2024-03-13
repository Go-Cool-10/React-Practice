import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEvent, editEvent, removeEvent } from "./todoSlice";

const Todo = () => {
  const events = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [todoInput, setTodoInput] = useState("");
  const [isEditable, setIsEditable] = useState(false);
  const [todo, setTodo] = useState();

  const handleChange = (e) => {
    setTodoInput(e.target.value);
  };

  const handleSubmit = () => {
    if (todoInput !== "") {
      if(!isEditable){
        dispatch(addEvent(todoInput));
        setTodoInput("");
      }
      else{
        dispatch(editEvent({todo, todoInput}))
        setIsEditable(false)
        setTodoInput("")
      }
    }
  };

  const handleEdit = (t) => {
    setTodoInput(t.title);
    setTodo(t)
    setIsEditable(true)
  }

  return (
    <>
      Enter the task:
      <input type="text" value={todoInput} onChange={handleChange} />
      <button onClick={handleSubmit}>Add</button>
      <div>
        {events.todos.map((t) => (
          <span key={t.id}>
            {t.title} 
            <button onClick={() => dispatch(removeEvent(t.id))}>x</button> 
            <button onClick={() => handleEdit(t)}>edit</button>
            <br />
          </span>
        ))}
        {JSON.stringify(events.todos)}
      </div>
    </>
  );
};

export default Todo;
