import { useState } from "react";
import { UPDATE_COMLOG } from "../../utils/mutations";
import { useMutation } from "@apollo/client";

const UpdateComLog = ({ _id, jobId }) => {
  const [method, setMethod] = useState("");
  const [content, setContent] = useState("");
  const [direction, setDirection] = useState("");

  const [updateComLog, { error }] = useMutation(UPDATE_COMLOG);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await updateComLog({
        variables: {
          _id,
          jobId,
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

  const updateLogButtonHandler = () => {};

  return (
    <>
      <div className="form-group">
        <button
          className="btn btn-primary"
          type="submit"
          onClick={updateLogButtonHandler}
        >
          Update This Communication
        </button>
      </div>

      <div>
        <h3>Update a Communication</h3>

        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="method"
              placeholder="Method"
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="content"
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>{" "}
          <div className="form-group">
            <input
              type="text"
              name="direction"
              placeholder="Direction"
              value={direction}
              onChange={(e) => setDirection(e.target.value)}
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
