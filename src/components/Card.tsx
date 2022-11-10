import React from "react";
import { Todo } from "../model";
import "./styles.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

interface Props {
  todo: Todo;
  //   key: number;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Card = ({ todo, todos, setTodos }: Props) => {
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  // setTodos(todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo));

  return (
    <div className="card">
      {todo.isDone ? (
        <s className="card_text">{todo.task}</s>
      ) : (
        <span className="card_text">{todo.task}</span>
      )}
      <div>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </div>
  );
};

export default Card;
