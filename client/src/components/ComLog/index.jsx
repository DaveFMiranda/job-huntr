import {useState} from 'react';
import {ADD_COMLOG} from '../../utils/mutations';
import {useMutation} from "@apollo/client";
import UpdateComLog from "../UpdateComLog"
import {DELETE_COMLOG} from '../../utils/mutations';
import {QUERY_JOB} from '../../utils/queries';

const ComLog = ({ comLogs = [], jobId }) => {
  const [method, setMethod] = useState("");
  const [content, setContent] = useState("");
  const [direction, setDirection] = useState("");
  const [updatedComLogId, setUpdatedComLogId] = useState(null);

  const [addComLog, { error }] = useMutation(ADD_COMLOG, {refetchQueries: [
    QUERY_JOB,
    'job'
  ]});
  const [deleteComLog] = useMutation(DELETE_COMLOG, {refetchQueries: [
    QUERY_JOB,
    'job'
  ]});


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
  
  const addLogButtonHandler = () => {

  }

  return (
    <>
      <div className="form-group">
        <button
          className="btn btn-primary"
          type="submit"
          onClick={addLogButtonHandler}
        >
          Add Communication
        </button>
      </div>

      <div>
        <h3>Add a Communication</h3>

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
              Submit Communication
            </button>
          </div>
        </form>
      </div>


      <ul>
        {!comLogs.length ? (
          <h3>No Communication Yet</h3>
        ) : (
          comLogs.map((comLog, index) => {
            console.log(comLog);
            return (
              <li key={index}>
                Method: {comLog.method}, Content: {comLog.content}, Direction:
                {comLog.direction}
                 <button
          className="btn btn-primary"
          type="submit"
          onClick={() => handleComLogUpdate(comLog._id)}
        >
          Update This Communication
        </button>
        <button
                  className="job-delete-button"
                  onClick={() => handleComLogDelete(comLog._id, jobId)}
                  style={{}}
                >
                  Delete This Communication
                </button>
        {updatedComLogId === comLog._id && <UpdateComLog _id={updatedComLogId} />}

              </li>
            );
          })
        )}
      </ul>
    </>
  );
};

export default ComLog;
