import Flex from "../common/Flex";

function FooterSocialLinks() {
  return (
    <div className="footer-social-links">
      <Flex style={{ maxWidth: "80rem", margin: "0 auto" }}>
        <SocialLink
          href="#"
          backgroundColor="#444"
          iconClassName="fas fa-user-friends"
        >
          Join us
        </SocialLink>
        <SocialLink
          href="#"
          backgroundColor="#1da1f2"
          iconClassName="fab fa-twitter"
        >
          TWITTER
        </SocialLink>
        <SocialLink
          href="#"
          backgroundColor="#c13584"
          iconClassName="fab fa-instagram"
        >
          INSTAGRAM
        </SocialLink>
        <SocialLink
          href="#"
          backgroundColor="#4267B2"
          iconClassName="fab fa-facebook"
        >
          FACEBOOK
        </SocialLink>
        <SocialLink
          href="#"
          backgroundColor="#ff0000"
          iconClassName="fab fa-youtube"
        >
          YOUTUBE
        </SocialLink>
      </Flex>
    </div>
  );
}

function SocialLink(props) {
  return (
    <a
      className="social-link-footer translateY opacity"
      style={{ backgroundColor: `${props.backgroundColor}` }}
      href={props.href}
    >
      <span>{props.children}</span>
      <i className={props.iconClassName}></i>
    </a>
  );
}

export default FooterSocialLinks;
