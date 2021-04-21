import { Link } from "react-router-dom";

function Me({ username }) {
  return (
    <div className="me">
      <Link to="/settings" style={{ textDecoration: "none" }}>
        <h1 className="opacity translateY">🐹 {username}</h1>
      </Link>
    </div>
  );
}

export default Me;
