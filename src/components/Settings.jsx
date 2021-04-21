import Container from "./common/Container";
import Flex from "./common/Flex";
import { FlexOne } from "./common/Flex";
import AccountSettings from "./settings/AccountSetting";
import PasswordSettings from "./settings/PasswordSettings";
import { useState } from "react";
import { useSelector } from "react-redux";

function Settings() {
  const { data } = useSelector((state) => state.authSlice);
  const [isActive, setIsActive] = useState(1);
  let settings;
  let id;

  if (data.status === "user") id = data.user._id;
  if (data.status === "noUser") {
    window.location = "/login";
  }

  if (isActive === 1) settings = <AccountSettings id={id} />;
  if (isActive === 2) settings = <PasswordSettings id={id} />;

  return (
    <Container className="settings-container">
      <Flex>
        <div className="settings">
          <button
            className={`btn btn-icon btn-setting ${
              isActive === 1 ? "btn-setting-active" : ""
            }`}
            onClick={() => {
              setIsActive(1);
            }}
          >
            <span>Account settings</span>
            <i className="fas fa-user"></i>
          </button>
          <button
            className={`btn btn-icon btn-setting ${
              isActive === 2 ? "btn-setting-active" : ""
            }`}
            onClick={() => {
              setIsActive(2);
            }}
          >
            <span>Change password</span>
            <i className="fas fa-key"></i>
          </button>
        </div>
        <FlexOne
          style={{
            backgroundColor: "#242f31",
            borderRadius: "8px",
            margin: "1rem 1rem 1rem 0",
          }}
        >
          {settings}
        </FlexOne>
      </Flex>
    </Container>
  );
}

export default Settings;
