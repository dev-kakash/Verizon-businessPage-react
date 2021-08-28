import React from "react";
import styled from "styled-components";

const Button = ({ text = "Hello", color = "orange" }) => {
  return (
    <ButtonStyle>
      <button className={color}>{text}</button>
    </ButtonStyle>
  );
};

export default Button;

const ButtonStyle = styled.div`
  button {
    padding: 6px 9px;
    background-color: #ff3a3a;
    color: white;
    border: 0px;
    border-radius: 5px;
    font-weight: 500;
  }
  .orange {
    background-color: #ff3a3a;
  }
  .green {
    background-color: #0bca05;
  }
  @media only screen and (max-width: 768px) {
    button {
      padding: 9px 9px;
      font-size: 12px;
    }
  }
`;
