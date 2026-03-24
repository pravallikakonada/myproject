import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    studentName = "",
    courseName = "",
    score = 0,
    totalQuestions = 0,
  } = location.state || {};

  const percentage =
    totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

  const isPassed = score >= 5;

  useEffect(() => {
    if (isPassed) {
      localStorage.setItem("passed", "true");
    } else {
      localStorage.setItem("passed", "false");
    }
  }, [isPassed]);

  const handleRequestCertificate = () => {
    navigate("/request-certificate", {
      state: {
        ...(location.state || {}),
        isPassed,
      },
    });
  };

  const handleBackToCourses = () => {
    navigate("/courses");
  };

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center p-6">
        <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-2xl">
          <h2 className="text-4xl font-bold text-center text-indigo-700 mb-8">
            Assessment Result
          </h2>

          <div
            className={`rounded-2xl p-6 mb-8 text-center ${
              isPassed
                ? "bg-green-100 border border-green-300"
                : "bg-red-100 border border-red-300"
            }`}
          >
            <p className="text-lg text-gray-700 mb-2">Your Score</p>
            <h3
              className={`text-5xl font-extrabold mb-3 ${
                isPassed ? "text-green-600" : "text-red-600"
              }`}
            >
              {score}/{totalQuestions}
            </h3>

            <p
              className={`text-2xl font-bold ${
                isPassed ? "text-green-700" : "text-red-700"
              }`}
            >
              {isPassed ? "Pass ✅" : "Fail ❌"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 text-lg mb-8">
            <div className="bg-gray-50 p-4 rounded-xl border">
              <p className="text-gray-500">Student Name</p>
              <p className="font-semibold text-gray-800">{studentName}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl border">
              <p className="text-gray-500">Course Name</p>
              <p className="font-semibold text-gray-800">{courseName}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl border">
              <p className="text-gray-500">Correct Answers</p>
              <p className="font-semibold text-gray-800">{score}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl border">
              <p className="text-gray-500">Percentage</p>
              <p className="font-semibold text-gray-800">{percentage}%</p>
            </div>
          </div>

          {isPassed ? (
            <button
              onClick={handleRequestCertificate}
              className="w-full bg-indigo-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition"
            >
              Request Certificate →
            </button>
          ) : (
            <div className="text-center">
              <p className="text-red-600 font-medium mb-4">
                You are not eligible for certificate. Please try again.
              </p>

              <button
                onClick={handleBackToCourses}
                className="bg-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-red-700 transition"
              >
                Back to Courses
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Result;