import { useLocation, useNavigate } from "react-router-dom";
import { TbTrademark as TradeMarkIcon } from "react-icons/tb";
const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container text-center mb-5">
        {location.pathname !== "/" && (
          <button className="btn btn-dark mb-3" onClick={() => navigate(-1)}>
            &larr; Go Back
          </button>
        )}
        <section className="footer-container">
          <div className="footer-section">
            <h2 className="footer-box">Resources</h2>
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
          <div className="footer-section">
            <h2 className="footer-box">Company</h2>
            <ul>
              <li>
                <a href="https://www.kickresume.com/en/resume-checker/">
                  Mission
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
          <div className="footer-section">
            <h2 className="footer-box">About</h2>
            <ul>
              <li>
                <a href="https://www.kickresume.com/en/resume-checker/">
                  Meet the Developers
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
          <div className="footer-section">
            <h2 className="footer-box">Contact</h2>
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
        </section>
        <h4 className="trademark-icon">
          Job Huntr<TradeMarkIcon color="#a180c8" />&nbsp; 
          Established 2023.
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
