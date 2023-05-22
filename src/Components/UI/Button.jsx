import React from "react";
import { styled } from "styled-components";

export const Button = ({ children, type, onClick, color, ...props }) => {
  return (
    <StyleButton
      type={type}
      style={{
        background: `${color}`,
      }}
      onClick={onClick}
    >
      {children}
    </StyleButton>
  );
};
const StyleButton = styled.button`
  background-color: #d3a614;
  border-radius: 50px;
  cursor: pointer;
  color: white;
  display: inline-block;
  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:hover {
    transform: scale(1.05) rotate(-1deg);
  }
`;
