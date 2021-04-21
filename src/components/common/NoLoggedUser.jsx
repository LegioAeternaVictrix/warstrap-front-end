import React from "react";
import { NavLink } from "react-router-dom";

function NoLoggedUser() {
  return (
    <React.Fragment>
      <NavLink className="btn btn-small opacity" to="/login">
        Log in
      </NavLink>

      <span style={{ color: "#444", fontSize: "1.2rem" }}>or</span>

      <NavLink className="btn btn-small opacity" to="/register">
        Register
      </NavLink>
    </React.Fragment>
  );
}

export default NoLoggedUser;
