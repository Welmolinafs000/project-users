import styled from "styled-components";

export const Button = styled.button`
  width: 342px;
  height: 74px;
  margin-top: 130px;

  border-radius: 14px;
  background: ${(props) => (props.isBack ? "transparent" : "#000000")};

  font-size: bold;
  font-size: 17px;
  line-height: 28px;
  color: #ffffff;
  border: ${(props) => (props.isBack ? "1px solid #ffffff" : "none")};

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  img {
    transform: ${props => props.isBack && 'rotate(180deg)' } ;
  }

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;
