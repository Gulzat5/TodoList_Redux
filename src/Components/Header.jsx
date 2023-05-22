import React from "react";
import { Outlet, useNavigate } from "react-router";
import { styled } from "styled-components";
import { Button } from "./UI/Button";

export const Header = () => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    navigate("/");
  };

  return (
    <>
      <HeaderCon>
        <h1 style={{ color: "#7b63d3" }}>Redux todo</h1>
        <Button color="#7b63d3" onClick={logoutHandler}>
          Logout
        </Button>
      </HeaderCon>
      <Outlet />
    </>
  );
};
const HeaderCon = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #e6dc24;
  margin-bottom: 3rem;
`;
