import { useQuery } from "@apollo/client";
import { QUERY_EMPLOYMENT_TERMS } from "../../utils/queries";

const Terms = () => {
  const { loading, data } = useQuery(QUERY_EMPLOYMENT_TERMS);
  const terms = data?.employmentTerms;
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data.employmentTerms) {
    return <h4>Looks like there aren't any employment terms for this user.</h4>;
  }

  return (
    <div>
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Viewing your terms of employment
        </h2>

        <div className="col-12 col-md-10 mb-5">
          <p>Tenure: {terms.tenure}</p>
          <p>Salary: {terms.salary}</p>
          <p>Insurance? {terms.insurance} </p>
          <p>Location: {terms.location}</p>
          <p>Fexible Hours? {terms.flexibleHours}</p>
          <p>Paid Time Off: {terms.PTO}</p>
          <p>Retirement? {terms.retirement}</p>
          <p>Parental Leave? {terms.parentalLeave}</p>
          <p>Training? {terms.training}</p>
          <p>Mentorship? {terms.mentorship}</p>
          <p>Notes: {terms.notes}</p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
