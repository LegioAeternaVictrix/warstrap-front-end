import Container from "./Container";
import { FlexCenterAling } from "./Flex";

function NotLoggedIn() {
  return (
    <Container>
      <FlexCenterAling>
        <h1>You are not logged in. Please log in to get access</h1>
      </FlexCenterAling>
    </Container>
  );
}

export default NotLoggedIn;
