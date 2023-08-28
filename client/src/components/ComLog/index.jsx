const ComLog = ({ comLogs = [] }) => {
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
