import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  index: 0,
};

export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addEvent: (state, action) => {
      let newTodo = {
        completed: false,
        title: action.payload,
        id: state.index++,
      };
      state.todos.push(newTodo);
    },

    removeEvent: (state, action) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },

    editEvent: (state, action) => {
      state.todos = state.todos.map((e) => {
        if (e.id === action.payload.todo.id) {
          e.title = action.payload.todoInput;
          return e;
        } else {
          return e;
        }
      });
    },
  },
});
export const { addEvent, removeEvent, editEvent } = TodoSlice.actions;
export default TodoSlice.reducer;
