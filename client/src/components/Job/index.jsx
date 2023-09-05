import { useQuery, useMutation } from "@apollo/client";
import ComLog from "../ComLog";
import { QUERY_JOB } from "../../utils/queries";
import formatTimestamp from "../../utils/date";
import ContactPersonForm from "../ContactPersonForm";
import { useState } from "react";
import UpdateContactPersonForm from "../UpdateContactPersonForm";
import { DELETE_CONTACT_PERSON } from "../../utils/mutations";
import { useParams } from "react-router-dom";
import { PiMagnifyingGlassBold as MagnifyIcon } from "react-icons/pi";
import { LuUser } from "react-icons/lu";

//////////////////////////////////////////////////////////

const Job = () => {
  const { jobId } = useParams();

  const [addContactPersonButton, setAddContactPersonButton] = useState(false);

  const [updatedContactId, setUpdatedContactId] = useState(null);
  const [deleteContact] = useMutation(DELETE_CONTACT_PERSON, {
    refetchQueries: [QUERY_JOB, "job"],
  });

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
    <div className="single-job-container">
      <h2 className="single-job-title">
        Viewing {job.role} at&nbsp;<span>{job.company}</span>.
      </h2>

      <div className="single-job-details">
        <div className="magnify-icon">
          <h2>Details </h2>
          &nbsp; <MagnifyIcon />
        </div>
        
        <p className="job-info-row">
          <span>Advertised Salary:</span> <span>{job.advertisedSalary}</span>
        </p>
        <p className="job-info-row">
          <span>Offer made?</span> <span>{job.offerMade}</span>
        </p>
        <p className="job-info-row">
          <span>Created At:</span><span>{formatTimestamp(job.createdAt)}</span>
        </p>
        <p className="job-info-row">
          <span>Updated At:</span> <span>{formatTimestamp(job.updatedAt)}</span>
        </p>
        <button
          className="add-question-button"
          onClick={() => setAddContactPersonButton(!addContactPersonButton)}
        >
          Update Contact
        </button>
        {addContactPersonButton && <ContactPersonForm jobId={jobId} />}
        {job.contactPerson && (
          <div>
            <div className="LuUser">
              <h2>Contact Person </h2>
              &nbsp; <LuUser />
            </div>
            <h5><span>Below is the current company contact</span></h5>
            <div className="single-job-current">
            <p className="job-info-row">
              <span>Name:</span> <span>{job.contactPerson.name}</span>
            </p>
            <p className="job-info-row">
              <span>Role:</span> <span>{job.contactPerson.role}</span>
            </p>
            <p className="job-info-row">
              <span>Phone:</span> <span>{job.contactPerson.phone}</span>
            </p>
            <p className="job-info-row">
              <span>Email:</span> <span>{job.contactPerson.email}</span>
            </p>
            <p className="job-info-row">
              <span>Notes:</span> <span>{job.contactPerson.notes}</span>
            </p>
            </div>
            
            <button
              className="contact-update-button"
              onClick={() => handleContactUpdate(job.contactPerson._id)}
              style={{}}
            >
              Update Contact
            </button>
            <button
              className="contact-delete-button"
              onClick={() => handleContactDelete(job.contactPerson._id, jobId)}
              style={{}}
            >
              Delete Contact
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
