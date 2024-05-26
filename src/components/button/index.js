import React from "react";

import { Button } from "./styles";

const myButton = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default myButton;
