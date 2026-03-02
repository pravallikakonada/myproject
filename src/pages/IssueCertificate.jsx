import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const IssueCertificate = () => {
  const navigate = useNavigate();

  const [studentName, setStudentName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [certificateId, setCertificateId] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/certificates/",
        {
          student_name: studentName,
          course_name: courseName,
          certificate_id: certificateId,
        }
      );

      setMessage("Certificate Issued Successfully ✅");

      // Clear form
      setStudentName("");
      setCourseName("");
      setCertificateId("");

    } catch (err) {
      setError("Error issuing certificate ❌");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">

        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">
          Issue Certificate
        </h2>

        {message && (
          <p className="text-green-600 text-sm mb-4">{message}</p>
        )}

        {error && (
          <p className="text-red-600 text-sm mb-4">{error}</p>
        )}

        <form onSubmit={handleSubmit}>

          {/* Student Name */}
          <div className="mb-4">
            <label className="block mb-1 text-gray-600">
              Student Name
            </label>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          {/* Course Name */}
          <div className="mb-4">
            <label className="block mb-1 text-gray-600">
              Course Name
            </label>
            <input
              type="text"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          {/* Certificate ID */}
          <div className="mb-6">
            <label className="block mb-1 text-gray-600">
              Certificate ID
            </label>
            <input
              type="text"
              value={certificateId}
              onChange={(e) => setCertificateId(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
          >
            Issue Certificate
          </button>

        </form>

        {/* Back Button */}
        <button
          onClick={() => navigate("/dashboard")}
          className="mt-4 text-indigo-600 hover:underline text-sm"
        >
          ← Back to Dashboard
        </button>

      </div>
    </div>
  );
};

export default IssueCertificate;