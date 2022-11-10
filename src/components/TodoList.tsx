import React from "react";
import { Todo } from "../model";
import Card from "./Card";
import "./styles.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <Card todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default TodoList;
