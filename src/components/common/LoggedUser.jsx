import React from "react";
import * as callBackend from "../../services/callBackend";

function LoggedUser(props) {
  function logout() {
    callBackend.logout();
  }

  return (
    <React.Fragment>
      <button
        onClick={logout}
        className="btn btn-small btn-outline-white opacity"
      >
        Log out
      </button>
    </React.Fragment>
  );
}

export default LoggedUser;
