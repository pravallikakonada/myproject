import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";

const StudentDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const courseName = location.state?.courseName || "Selected Course";

  const [studentName, setStudentName] = useState("");
  const [email, setEmail] = useState("");
  const [enrolled, setEnrolled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    const trimmedStudentName = studentName.trim();
    const trimmedEmail = email.trim();

    if (!trimmedStudentName || !trimmedEmail) {
      setErrorMessage("Please fill required fields");
      return;
    }

    try {
      await axios.post("http://127.0.0.1:8000/api/enroll-student/", {
        student_name: trimmedStudentName,
        email: trimmedEmail,
        course_name: courseName,
      });

      setEnrolled(true);
    } catch (error) {
      setErrorMessage(
        error.response?.data?.error || "Enrollment failed ❌"
      );
    }
  };

  const handleStartTest = () => {
    navigate("/assessment", {
      state: {
        studentName: studentName.trim(),
        email: email.trim(),
        courseName: courseName,
      },
    });
  };

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">
          <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
            Student Details
          </h2>

          <p className="text-center text-gray-600 mb-4">
            <strong>Selected Course:</strong> {courseName}
          </p>

          {errorMessage && (
            <div className="bg-red-100 border border-red-300 text-red-700 p-3 rounded-lg mb-4 text-center">
              {errorMessage}
            </div>
          )}

          {!enrolled ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Student Name
                </label>
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Enter student name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
              >
                Enroll Now
              </button>
            </form>
          ) : (
            <div className="text-center">
              <div className="bg-green-100 border border-green-300 text-green-700 p-4 rounded-lg mb-6">
                <p className="font-semibold text-lg">
                  Enrolled Successfully ✅
                </p>
                <p className="mt-2">
                  <strong>Name:</strong> {studentName}
                </p>
                <p>
                  <strong>Email:</strong> {email}
                </p>
                <p>
                  <strong>Course:</strong> {courseName}
                </p>
              </div>

              <button
                onClick={handleStartTest}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Start Test
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default StudentDetails;