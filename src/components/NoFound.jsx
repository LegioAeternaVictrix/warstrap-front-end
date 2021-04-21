import { FlexCenterAling } from "./common/Flex";
import Container from "./common/Container";

function NotFound() {
  return (
    <Container className="container--form">
      <FlexCenterAling>
        <div className="not-found">
          <h2 className="not-found__heading">Oops ❕</h2>
          <h1 className="not-found__heading">Page not Found (404) 🚨</h1>
        </div>
      </FlexCenterAling>
    </Container>
  );
}

export default NotFound;
