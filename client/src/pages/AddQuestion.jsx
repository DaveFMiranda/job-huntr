import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_QUESTION } from "../utils/mutations";
import Auth from "../utils/auth";

const AddQuestion = () => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [addedQuestions, setAddedQuestions] = useState([]);
  const [addQuestion, { error }] = useMutation(ADD_QUESTION);
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addQuestion({
        variables: {
          question,
          response,
        },
      });
      setAddedQuestions([...addedQuestions, { question, response }]);

      setQuestion("");
      setResponse("");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="page-container">
      <h3 className="page-header">Add A Question</h3>
      <form onSubmit={handleFormSubmit}>
        <div className="input-fields">
          <span className="form-header">Question:</span>
          <input
            className="input-response"
            type="text"
            name="question"
            placeholder="New Question Here"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
          <span className="form-header">Answer:</span>
          <input
            className="input-response"
            type="text"
            name="response"
            placeholder="Response Here"
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            required
          />
          <button className="save-question">Save</button>
        </div>
        {error && (
          <div className="bg-danger text-white p-3">{error.message}</div>
        )}
      </form>
    </div>
  );
};

export default AddQuestion;
