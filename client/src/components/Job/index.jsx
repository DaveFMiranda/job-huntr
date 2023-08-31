import { useQuery, useMutation } from "@apollo/client";
import ComLog from "../ComLog";
import { QUERY_JOB } from "../../utils/queries";
import formatTimestamp from "../../utils/date";
import ContactPersonForm from "../ContactPersonForm";
import { useState } from "react";
import UpdateContactPersonForm from '../UpdateContactPersonForm';
import { DELETE_CONTACT_PERSON } from "../../utils/mutations";

//////////////////////////////////////////////////////////

const Job = ({ jobId }) => {
  const [addContactPersonButton, setAddContactPersonButton] = useState(false);
 
  const [updatedContactId, setUpdatedContactId] = useState(null);
  const [deleteContact] = useMutation(DELETE_CONTACT_PERSON);

  const handleContactUpdate = (_id) => {
    setUpdatedContactId(_id);
  };

  const handleContactDelete = (_id, jobId) => {
    deleteContact({ variables: { _id, jobId } });
  };

  const { loading, data } = useQuery(QUERY_JOB, { variables: { _id: jobId } });

  const job = data?.job;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data.job) {
    return <h4>Looks like there isn't any more data for this job.</h4>;
  }

  return (
    <div className="flex-row justify-center mb-3">
      <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
        Viewing {job.role} at {job.company}.
      </h2>

      <div className="col-12 col-md-10 mb-5">
        <p>Advertised Salary: {job.advertisedSalary}</p>
        <p>Offer made? {job.offerMade}</p>
        <p>Created At: {formatTimestamp(job.createdAt)}</p>
        <p>Updated At: {formatTimestamp(job.updatedAt)}</p>
        <button
          className="add-question"
          onClick={() => setAddContactPersonButton(!addContactPersonButton)}
        >
          Add A Contact Person
        </button>
        {addContactPersonButton && <ContactPersonForm jobId={jobId} />}
        {job.contactPerson && (
          <div>
            <p>Contact Person:</p>
            <p>Name: {job.contactPerson.name}</p>
            <p>Role: {job.contactPerson.role}</p>
            <p>Phone: {job.contactPerson.phone}</p>
            <p>Email: {job.contactPerson.email}</p>
            <p>Notes: {job.contactPerson.notes}</p>
          
          <button
                  className="contact-update-button"
                  onClick={() => handleContactUpdate(job.contactPerson._id)}
                  style={{}}
                >
                  Update This Contact
                </button>
                <button
                  className="contact-delete-button"
                  onClick={() => handleContactDelete(job.contactPerson._id, jobId)}
                  style={{}}
                >
                  Delete This Contact
                </button>
                </div>

        )}
      {updatedContactId && <UpdateContactPersonForm _id={updatedContactId} />}

        <ComLog comLogs={job.comLogArray} jobId={jobId} />
      </div>
    </div>
  );
};

export default Job;
