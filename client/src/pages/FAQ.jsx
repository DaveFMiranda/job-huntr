import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_QUESTION } from "../utils/queries";
import { LuPencil as PencilIcon } from "react-icons/lu";
import { BsTrash3 as TrashIcon } from "react-icons/bs";
import { DELETE_QUESTION } from "../utils/mutations";

const FAQ = () => {
  const { loading, data } = useQuery(QUERY_QUESTION);
  const [deleteQuestion] = useMutation(DELETE_QUESTION, {refetchQueries: [
    QUERY_QUESTION,
    'questions'
  ]})
  const navigate = useNavigate();
  const handleQuestionDelete = (questionId) => {
    deleteQuestion({ variables: { _id: questionId } });
  };

  if (loading) return <p>Loading...</p>;

  const questions = data.questions;

  return (
    <div className="page-container">
      <h3 className="page-header">Commonly Asked Questions</h3>
      <div className="about-caq">
        Sick of answering the same questions over and over? Store them here for
        future reference!
      </div>
      <ul>
        {questions.map((item, index) => (
          <li key={index}>
            <div className="question-container">
              <span className="question">
                {item.question}
               
                &nbsp;<button className="delete" onClick={() => handleQuestionDelete(item._id)}>
                  <TrashIcon />
                </button>
              </span>
              <span className="answer">{item.response}</span>
            </div>
          </li>
        ))}
      </ul>
      <button
          className="caq-button"
          onClick={() => navigate("/addquestion")}
        >
          Add Question
        </button>
    </div>
    
  );
};

export default FAQ;
