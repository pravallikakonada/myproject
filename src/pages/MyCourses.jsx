import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import MyCoursesBg from "../assets/MyCourses-bg.jpg";   // background image

const MyCourses = () => {

  const navigate = useNavigate();
  const [course, setCourse] = useState(null);

  useEffect(() => {

    const data = localStorage.getItem("enrolledCourse");

    if (data) {
      const parsed = JSON.parse(data);
      setCourse(parsed.course);
    }

  }, []);

  return (
    <>
      <Header />

      <div
        style={{
          minHeight: "100vh",
          padding: "60px 20px",
          backgroundImage: `url(${MyCoursesBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          textAlign: "center"
        }}
      >

        <h2
          style={{
            fontSize: "32px",
            color: "#4f46e5",
            marginBottom: "40px"
          }}
        >
          My Courses
        </h2>

        {course ? (

          <div
            style={{
              background: "rgba(255,255,255,0.95)",
              width: "320px",
              margin: "auto",
              padding: "25px",
              borderRadius: "10px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              transition: "0.3s"
            }}
          >

            <h3 style={{ marginBottom: "10px", color: "#333" }}>
              {course.title}
            </h3>

            <p style={{ color: "#666", marginBottom: "20px" }}>
              Duration: {course.duration}
            </p>

            <button
              onClick={() =>
                navigate("/assessment", { state: { course: course.title } })
              }
              style={{
                padding: "12px 20px",
                backgroundColor: "#4f46e5",
                color: "white",
                border: "none",
                borderRadius: "6px",
                fontSize: "15px",
                cursor: "pointer",
                width: "100%"
              }}
            >
              Start Assessment
            </button>

          </div>

        ) : (

          <div
            style={{
              background: "rgba(255,255,255,0.95)",
              padding: "30px",
              width: "300px",
              margin: "auto",
              borderRadius: "10px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
            }}
          >
            <p style={{ color: "#777", fontSize: "16px" }}>
              No Courses Enrolled
            </p>
          </div>

        )}

      </div>
    </>
  );
};

export default MyCourses;