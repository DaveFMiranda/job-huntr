import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import formatTimestamp from "../utils/date";
import JobForm from "../components/JobForm";
import { useState } from "react";
import Job from "../components/Job";
import UpdateJobForm from "../components/UpdateJobForm";
import { DELETE_JOB } from "../utils/mutations";

import Auth from "../utils/auth";

const JobTracker = () => {
  const [addButton, setAddButton] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [updatedJobId, setUpdatedJobId] = useState(null);
  const [deleteJob] = useMutation(DELETE_JOB, {refetchQueries: [
    QUERY_ME,
    'me'
  ]});


  const navigate= useNavigate();
  const handleJobClick = (jobId) => {
    navigate(jobId)
  };

  const handleJobUpdate = (jobId) => {
    setUpdatedJobId(jobId);
  };
  const handleJobDelete = (jobId) => {
    deleteJob({ variables: { _id: jobId } });
  };
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4 className="profile-h4">
        You need to be <span>logged in</span> to see this. Use the navigation
        links above to
        <span>&nbsp;sign up&nbsp;</span>or <span>log in</span>!
      </h4>
    );
  }

  return (
    <div className="page-container">
      <h3 className="page-header">
        Job Tracker
        {/* Viewing {userParam ? `${user.username}'s` : "your"} saved jobs */}
      </h3>
      <table className="jobs">
        <tr>
          <th>Company</th>
          <th>Position</th>
          <th>Date Applied</th>
          <th>Job Offer</th>
          <th>Actions</th>
        </tr>
        {user.savedJobs.map((job, index) => {
          return (
            <tr key={index}>
              <td>{job.company}</td>
              <td>{job.role}</td>
              <td>{formatTimestamp(job.createdAt)}</td>
              <td>
                <input className="custom-checkbox" type="checkbox" id="checkbox" />
              </td>
              <td>
                <button
                  className="job-expand-button"
                  onClick={() => handleJobClick(job._id)}
                  style={{}}
                >
                  Details
                </button>
                <button
                  className="job-update-button"
                  onClick={() => handleJobUpdate(job._id)}
                  style={{}}
                >
                  Edit
                </button>
                <button
                  className="job-delete-button"
                  onClick={() => handleJobDelete(job._id)}
                  style={{}}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
      <button className="add-question" onClick={() => setAddButton(!addButton)}>
        Add A Job
      </button>
      <div className="add-job-body">
      
      {addButton && <JobForm />}
      {selectedJobId && <Job jobId={selectedJobId} />}
      
      {updatedJobId && <UpdateJobForm jobId={updatedJobId} />}
      </div>
    </div>
  );
};

export default JobTracker;
