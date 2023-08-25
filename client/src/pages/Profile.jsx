import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import Job from "../components/Job";

import { QUERY_USER, QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth";

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  const [selectedJobId, setSelectedJobId] = useState(null);

  const handleJobClick = (jobId) => {
    console.log(jobId);
    setSelectedJobId(jobId);
  };
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Viewing {userParam ? `${user.username}'s` : "your"} profile.
        </h2>

        <div className="col-12 col-md-10 mb-5">
          <p>{user.username}</p>
          <p>{user.firstName}</p>
          <p>{user.lastName}</p>
          <ul>
            {user.savedJobs.map((job, index) => {
              let contactInfo = null;
              if (job.contactPerson) {
                contactInfo = (
                  <>
                    Contact Person Name: {job.contactPerson.name} Contact Person
                    Role: {job.contactPerson.role} Contact Person Phone:{" "}
                    {job.contactPerson.phone} Contact Person Email:{" "}
                    {job.contactPerson.email} Contact Person Notes:{" "}
                    {job.contactPerson.notes}
                  </>
                );
              }
              console.log(contactInfo);
              return (
                <li key={index}>
                  Company: {job.company}, Role: {job.role}, Salary:{" "}
                  {job.advertisedSalary}
                  Offer made? {job.offerMade} {contactInfo}
                  <button onClick={() => handleJobClick(job._id)}>
                    Expand
                  </button>
                </li>
              );
            })}
          </ul>
          {selectedJobId && <Job jobId={selectedJobId} />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
