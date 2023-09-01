import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import Logo from "/jobhuntrlogo.png?url"

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="header-container">
      <div className="header-box">
        <div className="header-title">
          <Link className="text-light" to="/">
            <img src={Logo} alt="Job Huntr" />
          </Link>
          <p>Job search made easy!</p>
        </div>
        <div className="navbar-button">
          {Auth.loggedIn() ? (
            <>
              <Link className="profile-button" to="/">
                Home
              </Link>

              <button className="logout-button" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="login-button" to="/login">
                Login
              </Link>
              <Link className="signup-button" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
