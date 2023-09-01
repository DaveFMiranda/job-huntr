import { useState } from "react";
import { UPDATE_COMLOG } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import { QUERY_JOB } from "../../utils/queries";


const UpdateComLog = ({ _id }) => {
  const [method, setMethod] = useState("");
  const [content, setContent] = useState("");
  const [direction, setDirection] = useState("");

  const [updateComLog, { error }] = useMutation(UPDATE_COMLOG, {refetchQueries: [
    QUERY_JOB,
    'job'
  ]});

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await updateComLog({
        variables: {
          _id,
          method,
          content,
          direction,
        },
      });
      setMethod("");
      setContent("");
      setDirection("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div>
        <h3>Update This Communication</h3>

        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="method"
              placeholder="Method"
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="content"
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>{" "}
          <div className="form-group">
            <input
              type="text"
              name="direction"
              placeholder="Direction"
              value={direction}
              onChange={(e) => setDirection(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">
              Submit Updated Communication
            </button>
          </div>
        </form>
      </div>

      
    </>
  );
};

export default UpdateComLog;
