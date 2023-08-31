import React from "react";
import {useState} from "react"
import { useLocation } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_QUESTION_BY_ID } from "../../utils/queries";

const EditQuestionPage = () => {

  // ---> Grabbing ID to use <--- consider refactor //
  const location = useLocation();
  const split = location.pathname.split("/");
  const id = split[2]
  
  
  // ---> Finding the data from id <--- //
  const { loading, error, data } = useQuery(QUERY_QUESTION_BY_ID, {
    variables: { id },
  });

  // ---> Set up Question input <---  //
  const [updateQuestion, setUpdateQuestion] = useState("{question.question}");
  
  
  if (loading) return <p>Loading...</p>;
  const question = data.question;
  
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await updateQuestion({
        variables: {
          question,
          
        },
      });
      setUpdateQuestion({response });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      
      <p>Text showing</p>
      <p>Question: {question.question}</p>
      <p>Response: {question.response}</p>
    </div>
  );
};

export default EditQuestionPage;
