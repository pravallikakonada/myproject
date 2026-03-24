import React from "react";
import { useNavigate } from "react-router-dom";

const EnrollButton = ({ course }) => {

  const navigate = useNavigate();

  const handleEnroll = () => {

    localStorage.setItem("enrolledCourse", JSON.stringify(course));

    alert("Enroll Successful");

    navigate("/my-courses");

  };

  return (
    <button
      onClick={handleEnroll}
      style={{
        padding: "10px 20px",
        backgroundColor: "green",
        color: "white",
        border: "none",
        borderRadius: "5px"
      }}
    >
      Enroll
    </button>
  );
};

export default EnrollButton;