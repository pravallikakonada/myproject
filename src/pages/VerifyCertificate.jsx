import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const VerifyCertificate = () => {
  const navigate = useNavigate();

  const [certificateId, setCertificateId] = useState("");
  const [certificate, setCertificate] = useState(null);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);

  const handleVerify = async (e) => {
    e.preventDefault();

    setError("");
    setCertificate(null);
    setSearched(false);

    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/certificates/${certificateId}/`
      );

      setCertificate(response.data);
      setSearched(true);

    } catch (err) {
      setError("Invalid Certificate ❌");
      setSearched(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">

        <h2 className="text-2xl font-bold mb-6 text-center text-green-600">
          Verify Certificate
        </h2>

        {/* Form */}
        <form onSubmit={handleVerify}>

          <div className="mb-4">
            <label className="block mb-1 text-gray-600">
              Certificate ID
            </label>
            <input
              type="text"
              value={certificateId}
              onChange={(e) => setCertificateId(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
          >
            Verify
          </button>

        </form>

        {/* Result Section */}
        <div className="mt-6">

          {/* If Valid Certificate */}
          {certificate && (
            <div className="bg-green-100 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-green-700 mb-2">
                Certificate Valid ✅
              </h3>
              <p><strong>Student Name:</strong> {certificate.student_name}</p>
              <p><strong>Course:</strong> {certificate.course_name}</p>
              <p><strong>Issue Date:</strong> {certificate.issue_date}</p>
            </div>
          )}

          {/* If Invalid */}
          {searched && error && (
            <div className="bg-red-100 p-4 rounded-lg text-red-600">
              {error}
            </div>
          )}

        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate("/dashboard")}
          className="mt-4 text-green-600 hover:underline text-sm"
        >
          ← Back to Dashboard
        </button>

      </div>
    </div>
  );
};

export default VerifyCertificate;