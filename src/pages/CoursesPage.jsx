import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import CourseBg from "../assets/coursepage-bg.jpg";

const CoursesPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const studentData = location.state || {};

  const courses = [
    { id: 1, title: "React Basics", duration: "4 Weeks" },
    { id: 2, title: "Python Programming", duration: "6 Weeks" },
    { id: 3, title: "Web Development", duration: "8 Weeks" },
  ];

  const handleEnroll = (course) => {
    navigate("/student-details", {
      state: {
        ...studentData,
        courseName: course.title,
      },
    });
  };

  return (
    <>
      <Header />

      <div
        style={{
          minHeight: "100vh",
          padding: "60px 20px",
          backgroundImage: `url(${CourseBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              color: "#4f46e5",
              marginBottom: "10px",
            }}
          >
            Available Courses
          </h1>

          <p style={{ color: "#555", fontSize: "16px" }}>
            Choose a course, enroll, complete the assessment, and get your certificate.
          </p>
        </div>

        <div
          style={{
            maxWidth: "1000px",
            margin: "auto",
            background: "rgba(255,255,255,0.9)",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
            }}
          >
            {courses.map((course) => (
              <div
                key={course.id}
                style={{
                  background: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "12px",
                  padding: "25px",
                  textAlign: "center",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                }}
              >
                <h2
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    marginBottom: "10px",
                    color: "#111827",
                  }}
                >
                  {course.title}
                </h2>

                <p
                  style={{
                    color: "#4b5563",
                    marginBottom: "20px",
                    fontSize: "16px",
                  }}
                >
                  Duration: {course.duration}
                </p>

                <button
                  onClick={() => handleEnroll(course)}
                  style={{
                    background: "green",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Enroll
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesPage;