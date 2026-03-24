import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const CourseComplete = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>Course Completed 🎉</h2>

        <p>You have successfully completed the course.</p>

        <button
          onClick={() => navigate("/CertificateDetails")}
          style={{
            padding: "10px 20px",
            backgroundColor: "purple",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Generate Certificate
        </button>
      </div>
    </>
  );
};

export default CourseComplete;