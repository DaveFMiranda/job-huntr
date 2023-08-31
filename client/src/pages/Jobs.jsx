import React, { useState } from "react";

const Jobs = () => {
  return (
    <div className="page-container">
      <h3 className="page-header">Add A Job to Track</h3>
      <div className="input-fields">
        <span className="form-header">Company:</span>
        <input className="input-response" type="text" />
        <span className="form-header">Job Position:</span>
        <input className="input-response" type="text" />
        <span className="form-header">Date Applied:</span>
        <input className="input-response" type="text" />
        <button className="save-question">Save</button>
      </div>
    </div>
  );
};

export default Jobs;