import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_TERMS } from "../../utils/mutations";

import Auth from "../../utils/auth";

const UserTermsForm = () => {
  const [tenure, setTenure] = useState("");
  const [salary, setSalary] = useState(0);
  const [insurance, setInsurance] = useState(false);
  const [location, setLocation] = useState("");
  const [flexibleHours, setFlexibleHours] = useState(false);
  const [PTO, setPTO] = useState(0);
  const [retirement, setRetirement] = useState(false);
  const [parentalLeave, setParentalLeave] = useState(false);
  const [training, setTraining] = useState(false);
  const [mentorship, setMentorship] = useState(false);
  const [notes, setNotes] = useState("");

  const [addTerms, { error }] = useMutation(ADD_TERMS);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const employmentTerms = {
      tenure: tenure,
      salary: parseInt(salary, 10),
      insurance: insurance,
      location: location,
      flexibleHours: flexibleHours,
      PTO: parseInt(PTO, 10),
      retirement: retirement,
      parentalLeave: parentalLeave,
      training: training,
      mentorship: mentorship,
      notes: notes,
    };

    try {
      const { data } = await addTerms({
        variables: {
          employmentTerms,
        },
      });
      setTenure("");
      setSalary("");
      setInsurance(false);
      setLocation("");
      setFlexibleHours(false);
      setPTO("");
      setRetirement(false);
      setParentalLeave(false);
      setTraining(false);
      setMentorship(false);
      setNotes("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h3>Add Employment Terms</h3>
      {Auth.loggedIn() ? (
        <>
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="tenure"
                placeholder="How long do you want to work there?"
                value={tenure}
                onChange={(e) => setTenure(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                type="number"
                name="salary"
                placeholder="How much do you want to make?"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>
                Do you need insurance?
                <input
                  type="checkbox"
                  name="insurance"
                  checked={insurance}
                  onChange={(e) => setInsurance(e.target.checked)}
                />
              </label>
            </div>

            <div className="form-group">
              <input
                type="text"
                name="location"
                placeholder="Where do you want to work?"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>
                Do you need flexible hours?
                <input
                  type="checkbox"
                  name="flexibleHours"
                  checked={flexibleHours}
                  onChange={(e) => setFlexibleHours(e.target.checked)}
                />
              </label>
            </div>
            <div className="form-group">
              <input
                type="number"
                name="PTO"
                placeholder="How much PTO do you need?"
                value={PTO}
                onChange={(e) => setPTO(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>
                Do you need a retirement plan?
                <input
                  type="checkbox"
                  name="retirement"
                  checked={retirement}
                  onChange={(e) => setRetirement(e.target.checked)}
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Do you need parental leave?
                <input
                  type="checkbox"
                  name="parentalLeave"
                  checked={parentalLeave}
                  onChange={(e) => setParentalLeave(e.target.checked)}
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Do you need training?
                <input
                  type="checkbox"
                  name="training"
                  checked={training}
                  onChange={(e) => setTraining(e.target.checked)}
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Do you need mentorship?
                <input
                  type="checkbox"
                  name="mentorship"
                  checked={mentorship}
                  onChange={(e) => setMentorship(e.target.checked)}
                />
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="notes"
                placeholder="Enter any additional notes here"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>


            <div className="form-group">
              <button className="btn btn-primary" type="submit">
                Add Terms
              </button>
            </div>

            {error && (
              <div className="bg-danger text-white p-3">{error.message}</div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to add employment terms. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default UserTermsForm;
