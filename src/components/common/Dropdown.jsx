import React from "react";
import { Link } from "react-router-dom";

function Dropdown(props) {
  return (
    <div className={"dropdown"}>
      <button className={"btn btn-drop opacity"}>
        {props.title}
        <i className="fas fa-chevron-down"></i>
      </button>
      <div className="dropdown-content">{props.children}</div>
    </div>
  );
}

function DropdownLink(props) {
  return (
    <Link to={`${props.to}`}>
      <span className="drop-link">{props.children}</span>
    </Link>
  );
}

export default Dropdown;
export { DropdownLink };
