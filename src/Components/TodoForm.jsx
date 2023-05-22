import React, { useState } from "react";
import { Button } from "./UI/Button";
import { useDispatch } from "react-redux";
import { constans } from "../store/todoReducer/Todo_reducer";
import TodoList from "./TodoList";
import { styled } from "styled-components";

export const TodoForm = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const inputChangeHandler = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };

  const deleteAll = () => {
    dispatch({ type: constans.DELETE_ALL });
  };

  const addTodo = (title) => {
    dispatch({ type: constans.ADD, payload: title });
    setInput("");
  };

  return (
    <MainFormContainer>
      <FormContainer>
        <div>
          <input
            type="text"
            placeholder="Введите навание "
            value={input}
            onChange={inputChangeHandler}
          />
          <Button onClick={() => addTodo(input)} color="#c71e32">
            ADD
          </Button>
          <Button onClick={() => deleteAll()} color="#c71e32">
            Delete All{" "}
          </Button>
        </div>
      </FormContainer>
      <ListCon>
        <TodoList />
      </ListCon>
    </MainFormContainer>
  );
};
const ListCon = styled.div`
  padding: 20px 20px 20px 20px;
`;
const FormContainer = styled.div`
  background-color: #7b63d3;
  width: 40rem;
  height: 8rem;
  gap: 5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const MainFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  justify-content: center;
  align-items: center;
`;
