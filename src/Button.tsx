import React, { MouseEventHandler, FunctionComponent } from "react";

interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  color: string;
}

const Button: FunctionComponent<ButtonProps> = props => {
  const { color, onClick, children } = props;
  return (
    <button type="button" style={{ color }} onClick={onClick}>
      {children}
    </button>
  );
};
Button.defaultProps = {
  color: "red"
};

const handleClick = () => console.log("clicked!");

const Example = () => <Button onClick={handleClick}>Click Me</Button>;
