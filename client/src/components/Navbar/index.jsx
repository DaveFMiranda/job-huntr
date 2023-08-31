import { Link } from "react-router-dom";
import { Iceburger } from "react-iceburger";
import Auth from "../../utils/auth";

const Navbar = () => {
  return (
    <>
      <div className="navlinks-container">
        <Iceburger color="white" />
        <a className="navlink" href="/jobtracker">
          Job Tracker
        </a>
        <a className="navlink" href="/FAQ">
          Commonly Asked Questions
        </a>
        <a className="navlink" href="/terms">
          My Terms
        </a>
      </div>
    </>
  );
};

export default Navbar;
