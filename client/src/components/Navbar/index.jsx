import { Link } from "react-router-dom";
import { Iceburger } from "react-iceburger";
import Auth from "../../utils/auth";

const Navbar = () => {

  return (
<>  
      <div className="navlinks-container">
      <Iceburger color="white" />
          <a className="navlink" href="">
            User Settings
          </a>
          <a className="navlink" href="">
            My Terms
          </a>
          <a className="navlink" href="/jobtracker">
            My Applications/My Jobs/Job Tracker/Add a job
          </a>
          <a className="navlink" href="">
            Follow-Ups
          </a>
          <a className="navlink" href="/FAQ">
            Commonly Asked Questions
          </a>
      </div></>
  );
};

export default Navbar;
