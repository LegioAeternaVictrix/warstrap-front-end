import { Link } from "react-router-dom";

function MainButtons() {
  return (
    <div className="btns animate__animated animate__fadeIn">
      <Link to="/register">
        <button className="btn btn-big btn-red opacity">
          REGISTER FOR FREE
        </button>
      </Link>
      <Link to="/login">
        <button className="btn btn-big btn-outline-white opacity">
          LOG IN
        </button>
      </Link>
    </div>
  );
}

export default MainButtons;
