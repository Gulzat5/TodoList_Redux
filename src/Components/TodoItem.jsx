import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { constans } from "../store/todoReducer/Todo_reducer";
import { Button } from "./UI/Button";
import { styled } from "styled-components";

const TodoItem = ({ item }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState(true);
  const [title, setTitle] = useState(item.title);

  const deleteTodo = (id) => {
    dispatch({ type: constans.DELETE, payload: id });
  };

  const complateTodo = (id) => {
    dispatch({ type: constans.COMPLATE, payload: id });
  };

  const editHandler = (id, title) => {
    dispatch({ type: constans.EDIT, payload: id, title: title });
    ModeHandler();
  };
  const ModeHandler = () => {
    setState((prevState) => !prevState);
  };

  const changeHandler = (e) => {
    setTitle(e.target.value);
  };
  return (
    <MainContainer>
      {state ? (
        <StyleContainer>
          {item.complete ? (
            <>
              <p style={{ textDecoration: "line-through" }}>{title} </p>
              <Button onClick={() => complateTodo(item.id)}>
                Uncomplate
              </Button>{" "}
            </>
          ) : (
            <>
              <p>{title} </p>
              <Button onClick={() => complateTodo(item.id)} color="blue">
                Complate{" "}
              </Button>
            </>
          )}
          <Button onClick={ModeHandler} color="orange">
            {" "}
            Edit
          </Button>
          <Button onClick={() => deleteTodo(item.id)} color="#c71e32">
            Delete
          </Button>
        </StyleContainer>
      ) : (
        <StyleContainer>
          <input type="text" value={title} onChange={changeHandler} />
          <Button onClick={() => editHandler(item.id, item.title)}>Save</Button>
          <Button onClick={ModeHandler}>Cancel</Button>
        </StyleContainer>
      )}
    </MainContainer>
  );
};
export default TodoItem;
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  width: 100%;
  padding: 0px 0px 50px 0px;
`;
const StyleContainer = styled.div`
  background-color: #7b63d3;
  width: 35rem;
  height: 7rem;
  text-align: center;
  p {
    color: #ffff;
  }
`;
