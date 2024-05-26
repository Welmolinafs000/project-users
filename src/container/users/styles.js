import styled from "styled-components";
import backgraound from "../../assets/background1.svg";

export const Container = styled.div`
  background: url("${backgraound}");
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 100%;
  min-height: 100vh;
`;

export const Image = styled.img`
  margin-top: 30px;
`;

export const User = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #ffffff40;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 342px;
  height: 58px;
  outline: none;
  border: none;
  margin-top: 20px;

  p {
    font-size: 20px;
    font-weight: 400;
    line-height: 28.13px;
    color: #ffffff;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.5;
    }
  }
`;
