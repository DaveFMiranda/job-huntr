import { useState } from "react";
import { ADD_COMLOG } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import UpdateComLog from "../UpdateComLog";
import { DELETE_COMLOG } from "../../utils/mutations";
import { QUERY_JOB } from "../../utils/queries";
import { AiOutlineComment as CommIcon } from "react-icons/ai";
import { FaRegSadCry as SadIcon } from "react-icons/fa";

const ComLog = ({ comLogs = [], jobId }) => {
  const [method, setMethod] = useState("");
  const [content, setContent] = useState("");
  const [direction, setDirection] = useState("");
  const [updatedComLogId, setUpdatedComLogId] = useState(null);

  const [addComLog, { error }] = useMutation(ADD_COMLOG, {
    refetchQueries: [QUERY_JOB, "job"],
  });
  const [deleteComLog] = useMutation(DELETE_COMLOG, {
    refetchQueries: [QUERY_JOB, "job"],
  });

  const handleComLogUpdate = (_id) => {
    setUpdatedComLogId(_id);
  };

  const handleComLogDelete = (_id, jobId) => {
    deleteComLog({ variables: { _id, jobId } });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addComLog({
        variables: {
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

  const addLogButtonHandler = () => {};

  return (
    <>
      {/* <div className="form-group">
        <button
          className="add-comm-button"
          type="submit"
          onClick={addLogButtonHandler}
        >
          Add Communication
        </button>
      </div> */}

      <div>
        <div className="magnify-icon">
          <h2>Add a Communication </h2>
          &nbsp; <CommIcon />
        </div>
        <h5>
          <span>Add any new correspondence with this company</span>
        </h5>
        <form className="form-background" onSubmit={handleFormSubmit}>
          <div className="form-group">
            <select
              className="single-job-dropdown"
              name="method"
              placeholder="Method"
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              required
            >
              <option value="website">website</option>
              <option value="email" selected>
                email
              </option>
              <option value="phone">phone</option>
              <option value="in-person">in-person</option>
            </select>
          </div>
          <div className="form-group">
            <input className="comm-log-content-section"
              type="text"
              name="content"
              placeholder="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>{" "}
          <div className="form-group">
            <select className="single-job-dropdown"
              name="direction"
              placeholder="Direction"
              value={direction}
              onChange={(e) => setDirection(e.target.value)}
              required
            >
              <option value="incoming" selected>
                incoming
              </option>
              <option value="outgoing">outgoing</option>
            </select>
          </div>
          <div className="form-group">
            <button className="submit-comm-button" type="submit">
              Submit Communication
            </button>
          </div>
        </form>
      </div>

      <ul>
        {!comLogs.length ? (
          <div className="magnify-icon">
            <h3>No Communication Yet&nbsp;</h3>
            <SadIcon />
          </div>
        ) : (
          comLogs.map((comLog, index) => {
            console.log(comLog);
            return (
              <div className="com-logs" key={index}>
                <div className="com-text">
                  <span>Method:&nbsp;</span>&nbsp;{comLog.method}&nbsp;{" "}
                  <span>Content:&nbsp;</span>&nbsp;{comLog.content} &nbsp;
                  <span>Direction:&nbsp;</span>
                  &nbsp;{comLog.direction}
                </div>
                <button
                  className="submit-comm-button"
                  type="submit"
                  onClick={() => handleComLogUpdate(comLog._id)}
                >
                  Update
                </button>
                <button
                  className="job-delete-button"
                  onClick={() => handleComLogDelete(comLog._id, jobId)}
                  style={{}}
                >
                  Delete
                </button>
                {updatedComLogId === comLog._id && (
                  <UpdateComLog _id={updatedComLogId} />
                )}
              </div>
            );
          })
        )}
      </ul>
    </>
  );
};

export default ComLog;
