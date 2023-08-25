import { useQuery } from "@apollo/client";

import ComLog from "../ComLog";

import { QUERY_JOB } from "../../utils/queries";

const Job = ({jobId}) => {
  const { loading, data } = useQuery(QUERY_JOB, {variables: {_id: jobId}});

  const job = data?.job;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data.job) {
    return <h4>Looks like there isn't any more data for this job.</h4>;
  }
  const { name: contactName, role: contactRole, phone: contactPhone, email: contactEmail, notes: contactNotes } =
    job.contactPerson;
    console.log(contactName);
    console.log(contactRole);

    console.log(job.contactPerson);
  return (
    <div>
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Viewing {job.role} at {job.company}.
        </h2>

        <div className="col-12 col-md-10 mb-5">
          <p>Advertised Salary: {job.advertisedSalary}</p>
          <p>Offer made? {job.offerMade}</p>
          <p>Contact Person:</p>
          <p>Name: {contactName}</p>
          <p>Role: {contactRole}</p>
          <p>Phone: {contactPhone}</p>
          <p>Email: {contactEmail}</p>
          <p>Notes: {contactNotes}</p>
          <ComLog comLogs={job.comLogArray} jobId={jobId}/>
        </div>
      </div>
    </div>
  );
};

export default Job;
