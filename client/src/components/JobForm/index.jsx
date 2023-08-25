import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

// import { ADD_THOUGHT } from '../../utils/mutations';
import { QUERY_ME } from "../../utils/queries";
import { ADD_JOB } from "../../utils/mutations";

import Auth from "../../utils/auth";

const JobForm = () => {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [advertisedSalary, setAdvertisedSalary] = useState("");
  const [offerMade, setOfferMade] = useState(false);
  const [contactPersonName, setContactPersonName] = useState("");
  const [contactPersonRole, setContactPersonRole] = useState("");
  const [contactPersonPhone, setContactPersonPhone] = useState("");
  const [contactPersonEmail, setContactPersonEmail] = useState("");
  const [contactPersonNotes, setContactPersonNotes] = useState("");


  // const [thoughtText, setThoughtText] = useState('');

  // const [characterCount, setCharacterCount] = useState(0);

  const [addJob, { error }] = useMutation(ADD_JOB);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const contactPerson = {
      name: contactPersonName,
      role: contactPersonRole,
      phone: contactPersonPhone,
      email: contactPersonEmail,
      notes: contactPersonNotes
    }

    try {
      const { data } = await addJob({
        variables: {
          company,
          role,
          advertisedSalary: parseInt(advertisedSalary, 10),
          offerMade,
          contactPerson
        },
      });
      setCompany("");
      setRole("");
      setAdvertisedSalary("");
      setOfferMade(false);
      setContactPersonName("");
      setContactPersonRole("");
      setContactPersonPhone("");
      setContactPersonEmail("");
      setContactPersonNotes("");
      // setThoughtText('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h3>Add a Job</h3>
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
              <input
                type="text"
                name="contactPersonName"
                placeholder="Contact Person Name"
                value={contactPersonName}
                onChange={(e) => setContactPersonName(e.target.value)}
                
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="contactPersonRole"
                placeholder="Contact Person Role"
                value={contactPersonRole}
                onChange={(e) => setContactPersonRole(e.target.value)}
                
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="contactPersonPhone"
                placeholder="Contact Person Phone"
                value={contactPersonPhone}
                onChange={(e) => setContactPersonPhone(e.target.value)}
                
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="contactPersonEmail"
                placeholder="Contact Person Email"
                value={contactPersonEmail}
                onChange={(e) => setContactPersonEmail(e.target.value)}
                
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="contactPersonNotes"
                placeholder="Contact Person Notes"
                value={contactPersonNotes}
                onChange={(e) => setContactPersonNotes(e.target.value)}
                
              />
            </div>


            <div className="form-group">
              <button className="btn btn-primary" type="submit">
                Add Job
              </button>
            </div>

            {error && (
              <div className="bg-danger text-white p-3">{error.message}</div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to add a job. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default JobForm;
