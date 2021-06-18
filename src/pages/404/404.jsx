import "./404.css";
import { Link } from "react-router-dom";

export default function NoMatch() {
  return (
    <div className="noMatch">
      <div className="overlay"></div>
      <div className="errorMessage">
        <h1>The page you were looking for cannot be found.</h1>
        <h2>Please go to the Disney+ home page by clicking the button below</h2>
        <Link to="/">
          <button>Disney++ Home</button>
        </Link>
      </div>
    </div>
  );
}
