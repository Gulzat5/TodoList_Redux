import React, { useState } from "react";
import { styled } from "styled-components";
import { Button } from "./UI/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ActionType } from "../store/auth/AuthReducer";

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputState, setInputState] = useState({
    email: "",
    password: "",
  });
  const inputChangeHandler = (name) => {
    return (event) => {
      setInputState((prev) => ({ ...prev, [name]: event.target.value }));
    };
  };
  // const ChangeHandlerPassword = (event) => {
  //   return (event) => {
  //     setInputState((prev) => ({ ...prev, name: event.target.value }));
  //   };
  // };
  console.log(inputState.email, inputState.password);
  const submitHandler = (event) => {
    event.preventDefault();
    if (
      inputState.email === "gul@gmail.com" &&
      inputState.password.length > 4
    ) {
      dispatch({ type: ActionType.LOGIN, payload: inputState.email });
      navigate("/header/todolist");
      console.log("sddddddddd");
    }
    setInputState({ email: "", password: "" });
  };
  return (
    <Container>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            value={inputState.email}
            placeholder="Enter your email"
            type="email"
            id="email"
            onChange={inputChangeHandler("email")}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            autoComplete="password"
            value={inputState.password}
            type="password"
            id="password"
            onChange={inputChangeHandler("password")}
            placeholder="password"
          />
        </div>
        <Button type="submit">Login</Button>
      </form>
    </Container>
  );
};

export default Auth;
const Container = styled.div`
  margin: 0 auto;
  margin-top: 10rem;
  padding: 3rem 1.5rem;
  width: 50%;
  border-radius: 15px;
  background-color: #8e5bd4;
  box-shadow: 0 0 5px rgb(246, 233, 47), 0 0 10px #d8d63a, 0 0 10px #e8df2a,
    0 0 10px #e7e13b;
  div {
    margin-bottom: 1rem;
    label {
      margin-right: 1rem;
      font-size: 18px;
      font-weight: 700;
      color: white;
    }
  }
`;
