import React from "react";
import { ContainerItens as Container } from "./styles";

const ContainerItens = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default ContainerItens;
