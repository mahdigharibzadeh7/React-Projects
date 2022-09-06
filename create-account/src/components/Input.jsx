import React from "react";
import "./componentsStyle/Input.css";

const Input = (props) => {
  const IconTag = props.icon;

  const gridStyle =
    props.html_for == "em" || props.html_for == "pass"
      ? { gridColumn: "1/3" }
      : {};

  const iconStyle =
    props.html_for == "em" || props.html_for == "pass"
      ? { paddingLeft: "37rem" }
      : {};

  const cursor = props.html_for == "pass" && { cursor: "pointer" };

  return (
    <div className="input" style={gridStyle}>
      <label htmlFor={props.html_for}>{props.inLabel}</label>
      <div className="icon" style={iconStyle}>
        <IconTag style={cursor} />
      </div>
      <input type={props.inputType} id={props.html_for} />
    </div>
  );
};

export default Input;
