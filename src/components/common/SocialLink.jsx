function FacebookLink(props) {
  return (
    <a
      className="social-link translateY"
      style={{ backgroundColor: "#4267B2" }}
      href={props.href}
    >
      <i className="fab fa-facebook"></i>
    </a>
  );
}

function TwitterLink(props) {
  return (
    <a
      className="social-link translateY"
      style={{ backgroundColor: "#1da1f2" }}
      href={props.href}
    >
      <i className="fab fa-twitter"></i>
    </a>
  );
}

function InstagramLink(props) {
  return (
    <a
      className="social-link translateY"
      style={{ backgroundColor: "#c13584" }}
      href={props.href}
    >
      <i className="fab fa-instagram"></i>
    </a>
  );
}

function Message(props) {
  return (
    <a
      className="social-link translateY"
      style={{ backgroundColor: "#ffa500" }}
      href={props.href}
    >
      <i className="fas fa-envelope"></i>
    </a>
  );
}

export { FacebookLink, TwitterLink, InstagramLink, Message };
