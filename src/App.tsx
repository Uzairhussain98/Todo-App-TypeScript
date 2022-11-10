import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./model";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodosList] = useState<Todo[]>([]);
  // console.log(todos);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodosList([
        ...todos,
        {
          id: Date.now(),
          task: todo,
          isDone: false,
        },
      ]);
    }
    setTodo("");
    // console.log(todos);
  };

  return (
    <div className="App">
      <h1 className="heading">Todo App TS</h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodosList} />
    </div>
  );
}

export default App;
