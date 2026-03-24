import React from "react";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ course }) => {

  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate("/student-details", { state: { course: course } });
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        width: "250px",
        borderRadius: "8px",
        textAlign: "center"
      }}
    >
      <h3>{course.title}</h3>
      <p>Duration: {course.duration}</p>

      <button
        onClick={handleEnroll}
        style={{
          padding: "8px 15px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Enroll
      </button>
    </div>
  );
};

export default CourseCard;