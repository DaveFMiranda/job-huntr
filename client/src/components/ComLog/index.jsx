const ComLog = ({ comLogs = [] }) => {




const addComLogHandler = () => {
  const [method, setMethod] = useState("");
  const [content, setContent] = useState("");
  const [direction, setDirection] = useState("");
  
  const [addComLog, { error }] = useMutation(ADD_COMLOG);
  
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addComLog({
        variables: {
          method,
          content,
          direction
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
              value={company}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div> <div className="form-group">
            <input
              type="text"
              name="direction"
              placeholder="Direction"
              value={company}
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
)};

  <div className="form-group">
  <button className="btn btn-primary" type="submit" onClick={addComLogHandler}>
    Add Communication
  </button>
</div>;



  if (!comLogs.length) {
    return <h3>No Communication Yet</h3>;
  }

  return (
    <ul>
      {comLogs.map((comLog, index) => {
        console.log(comLog);
        return (
          <li key={index}>
            Method: {comLog.method}, Content: {comLog.content}, Direction:
            {comLog.direction}
          </li>
        );
      })}
    </ul>
  );
};

export default ComLog;
