import {useState} from 'react';
import {ADD_COMLOG} from '../../utils/mutations';
import {useMutation} from "@apollo/client";
import formatTimestamp from '../../utils/date';

const ComLog = ({ comLogs = [], jobId }) => {
  const [method, setMethod] = useState("");
  const [content, setContent] = useState("");
  const [direction, setDirection] = useState("");

  const [addComLog, { error }] = useMutation(ADD_COMLOG);
  

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
                Method: {comLog.method},
                Content: {comLog.content},
                Direction:{comLog.direction}, 
                Created At: {formatTimestamp(comLog.createdAt)}, 
                Updated At: {formatTimestamp(comLog.updatedAt)}
              </li>
            );
          })
        )}
      </ul>
    </>
  );
};

export default ComLog;
