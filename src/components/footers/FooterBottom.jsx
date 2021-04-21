import Flex from "../common/Flex";
import { FlexOne } from "../common/Flex";

function FooterBottom() {
  return (
    <Flex className="footer">
      <FlexOne>
        <h2>Total Warstrap</h2>
        <h3>support@totalwarstrap.com</h3>
        <h3 className="copyright">&copy; 2021 by Warstrap.</h3>
      </FlexOne>

      <FlexOne>
        <h2>Contact</h2>
        <ul>
          <ContactLink>0758644***</ContactLink>
          <ContactLink>claudiubaituc@gmail.com</ContactLink>
          <ContactLink color="#000" to="https://github.com/LegioAeternaVictrix">
            Github
          </ContactLink>
          <ContactLink
            color="#4267B2"
            to="https://www.facebook.com/mikaelson09/"
          >
            Facebook
          </ContactLink>
        </ul>
      </FlexOne>
    </Flex>
  );
}

function ContactLink(props) {
  return (
    <li>
      <a
        className="contact-me"
        href={props.to}
        style={{ color: `${props.color}` }}
      >
        {props.children}
      </a>
    </li>
  );
}

export default FooterBottom;
