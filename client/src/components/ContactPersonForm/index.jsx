import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_CONTACT_PERSON } from "../../utils/mutations";
import { QUERY_JOB } from "../../utils/queries";

import Auth from "../../utils/auth";

const ContactPersonForm = ({ jobId }) => {
  const [name, setContactPersonName] = useState("");
  const [role, setContactPersonRole] = useState("");
  const [phone, setContactPersonPhone] = useState("");
  const [email, setContactPersonEmail] = useState("");
  const [notes, setContactPersonNotes] = useState("");

  const [addContactPerson, { error }] = useMutation(ADD_CONTACT_PERSON, {
    refetchQueries: [QUERY_JOB, "job"],
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addContactPerson({
        variables: {
          jobId,
          name,
          role,
          phone,
          email,
          notes,
        },
      });
      setContactPersonName("");
      setContactPersonRole("");
      setContactPersonPhone("");
      setContactPersonEmail("");
      setContactPersonNotes("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="add-contact-container">
      <h2>Add a Contact Person</h2>
      <h5>
        <span>To update an existing contact fill out the form below</span>
      </h5>
      {Auth.loggedIn() ? (
        <>
          <form className="form-background" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="contactPersonName"
                placeholder="Contact Person Name"
                value={name}
                onChange={(e) => setContactPersonName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="contactPersonRole"
                placeholder="Contact Person Role"
                value={role}
                onChange={(e) => setContactPersonRole(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="contactPersonPhone"
                placeholder="Contact Person Phone"
                value={phone}
                onChange={(e) => setContactPersonPhone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="contactPersonEmail"
                placeholder="Contact Person Email"
                value={email}
                onChange={(e) => setContactPersonEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="contactPersonNotes"
                placeholder="Contact Person Notes"
                value={notes}
                onChange={(e) => setContactPersonNotes(e.target.value)}
              />
            </div>

            <div className="form-group">
              <button className="contact-button" type="submit">
                Submit
              </button>
            </div>

            {error && (
              <div className="bg-danger text-white p-3">{error.message}</div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to add a contact person. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default ContactPersonForm;
