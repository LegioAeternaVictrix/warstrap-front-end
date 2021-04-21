import React from "react";
import Flex from "./common/Flex";
import { FlexCenterAling } from "./common/Flex";
import { FlexOneStartAling } from "./common/Flex";
import { FlexOneEndAling } from "./common/Flex";
import { FlexOne } from "./common/Flex";
import { NavLink } from "react-router-dom";
import NoLoggedUser from "./common/NoLoggedUser";
import LoggedUser from "./common/LoggedUser";
import Me from "./common/Me";
import { useSelector } from "react-redux";

function NavBar() {
  const { status, user } = useSelector((state) => state.authSlice.data);
  let LoggedInNav;

  if (status === "user") {
    LoggedInNav = (
      <React.Fragment>
        <Me username={user.username}></Me>
        <LoggedUser />
      </React.Fragment>
    );
  } else if (status === "noUser") {
    LoggedInNav = <NoLoggedUser />;
  }

  return (
    <Flex className="navbar animate__animated animate__fadeInDown">
      <FlexOneStartAling>
        <h1 className="nav-logo opacity">Warstrap</h1>
      </FlexOneStartAling>

      <FlexOne>
        <FlexCenterAling>
          <NavLink className="btn btn-small btn-inset btn-icon " to="/">
            Home
            <i className="fas fa-home"></i>
          </NavLink>

          <NavLink className="btn btn-small btn-border opacity" to="/about">
            About
          </NavLink>
        </FlexCenterAling>
      </FlexOne>

      <FlexOneEndAling>{LoggedInNav}</FlexOneEndAling>
    </Flex>
  );
}

export default NavBar;
