import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todo);
  console.log(todos, "todos");
  return (
    <div>
      {todos.map((item) => {
        return <TodoItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default TodoList;
