import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { UPDATE_JOB } from "../../utils/mutations";

import Auth from "../../utils/auth";
//Need to pass jobId in as a prop
const UpdateJobForm = ({jobId}) => {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [advertisedSalary, setAdvertisedSalary] = useState("");
  const [offerMade, setOfferMade] = useState(false);

  const [updateJob, { error }] = useMutation(UPDATE_JOB);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await updateJob({
        variables: {
          jobId,
          company,
          role,
          advertisedSalary: parseInt(advertisedSalary, 10),
          offerMade,
        },
      });
      setCompany("");
      setRole("");
      setAdvertisedSalary("");
      setOfferMade(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h3>Update This Job</h3>
      {Auth.loggedIn() ? (
        <>
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="role"
                placeholder="Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="number"
                name="advertisedSalary"
                placeholder="Advertised Salary"
                value={advertisedSalary}
                onChange={(e) => setAdvertisedSalary(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>
                Offer Made:
                <input
                  type="checkbox"
                  name="offerMade"
                  checked={offerMade}
                  onChange={(e) => setOfferMade(e.target.checked)}
                />
              </label>
            </div>

            <div className="form-group">
              <button className="btn btn-primary" type="submit">
                Update Job
              </button>
            </div>

            {error && (
              <div className="bg-danger text-white p-3">{error.message}</div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to update a job. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default UpdateJobForm;