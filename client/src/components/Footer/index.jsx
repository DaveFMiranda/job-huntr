import { Link, useLocation, useNavigate } from "react-router-dom";
import { TbTrademark as TradeMarkIcon } from "react-icons/tb";
const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container text-center mb-5">
        {location.pathname !== "/" && (
          <button className="go-back btn btn-dark mb-3" onClick={() => navigate(-1)}>
            &larr; Go Back
          </button>
        )}
        <section className="footer-container">
          <div className="footer-section">
            <div className="footer-titles">
              <ul>
                <li>Resources</li>
                <li>Career</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>

            <div className="resources-links">
              <ul>
                <li>
                  <a href="https://www.kickresume.com/en/resume-checker/">
                    Resume Help
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/watch?v=SG5Sb5WTV_g&list=PL54X5yR8qizsMpvTCqUIEFMeEp-chvcxk">
                    LinkedIn Help
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/dthompsondev/">Advice</a>
                </li>
              </ul>
            </div>
          
          <div className="company-links">
            <ul>
              <li>
                <Link to="/CompanyPage">Mission</Link>
              </li>
            </ul>
          </div>
          <div className="about-links">
            <ul>
              <li>
                <Link to ="/AboutPage">Meet the Developers</Link>
              </li>
            </ul>
          </div>

          <div className="contact-links">
            <ul>
              <li>
                <Link to="/ContactPage">Contact Us</Link>
              </li>
            </ul>
            </div>
          </div>
        </section>
        <h4 className="trademark-icon">
          Job Huntr
          <TradeMarkIcon color="#a180c8" />
          &nbsp; Established 2023.
        </h4>
      </div>
      
    </footer>
  );
};

export default Footer;
