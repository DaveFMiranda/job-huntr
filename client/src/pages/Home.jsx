import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";

import { Iceburger } from "react-iceburger";

import JobForm from "../components/JobForm";

const Home = () => {
  return (
    <main>
          <div className="burger">
          <Iceburger color="white" />
        </div>
      <div className="navlinks-container">
        <div className="navlinks-user">
          <a className="navlink" href="">
            User Settings
          </a>
          <a className="navlink" href="/terms">
            My Terms
          </a>
        </div>
        <div className="navlinks-job">
          <a className="navlink" href="/jobtracker">
            My Applications/My Jobs/Job Tracker/Add a job
          </a>
          <a className="navlink" href="">
            Follow-Ups
          </a>
          <a className="navlink" href="/FAQ">
            Commonly Asked Questions
          </a>
        </div>
      </div>
      <div className="content-container">
        <div className="form" style={{ border: "1px dotted #1a1a1a" }}>
          
        </div>
      </div>
    </main>
  );
};

export default Home;
