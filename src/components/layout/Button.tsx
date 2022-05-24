import React from "react";
import "./Button.css";

type Props = {
  onView: React.MouseEventHandler;
  children: string;
};

const Button = ({ onView, children }: Props) => {
  return (
    <button className="button" onClick={onView}>
      {children}
    </button>
  );
};

export default Button;
