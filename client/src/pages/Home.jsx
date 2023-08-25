import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";

import { QUERY_THOUGHTS } from "../utils/queries";
import { Iceburger } from "react-iceburger";

import JobForm from "../components/JobForm";

const Home = () => {
  return (
    <main>
      <p className="links">
        <a href="">User Settings</a>
        <a href="">My Terms</a>
        <a href=""></a>

        <a href="">My Applications</a>
        <a href="">Follow-Ups</a>
        <a href="">Common Questions</a>
      </p>
      <Iceburger color="white" />
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: "1px dotted #1a1a1a" }}
        >
          <div>
            <JobForm />
          </div>
        </div>
        <div className="col-12 col-md-8 mb-3"></div>
      </div>
    </main>
  );
};

export default Home;
