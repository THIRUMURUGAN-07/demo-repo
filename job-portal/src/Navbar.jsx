import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>JobPortal</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/post-job">Post Job</Link>
      </div>
    </nav>
  );
}

export default Navbar;
