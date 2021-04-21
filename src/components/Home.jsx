import React from "react";
import { FlexCenterAling } from "./common/Flex";
import SecondaryNavBar from "./SecondaryNavBar";
import MainButtons from "./common/MainButtons";
import CreatePost from "./common/CreatePost";
import Posts from "./common/Posts";
import { useSelector } from "react-redux";

function Home() {
  const { status } = useSelector((state) => state.authSlice.data);

  return (
    <React.Fragment>
      <SecondaryNavBar />
      <FlexCenterAling className="main">
        {status === "noUser" && <MainButtons />}
        {status === "user" && <CreatePost />}
      </FlexCenterAling>

      <Posts />
    </React.Fragment>
  );
}

export default Home;
