import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const VerifyCertificate = () => {
  const navigate = useNavigate();

  const [certificateId, setCertificateId] = useState("");
  const [certificate, setCertificate] = useState(null);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleVerify = async (e) => {
    e.preventDefault();

    const trimmedId = certificateId.trim();

    if (!trimmedId) {
      setError("Please enter Certificate ID");
      setCertificate(null);
      setSearched(true);
      return;
    }

    setLoading(true);
    setError("");
    setCertificate(null);
    setSearched(false);

    try {
      const response = await axios.get(
        `http://localhost:8000/api/verify/${trimmedId}/`
      );

      setCertificate(response.data);
      setSearched(true);
    } catch (err) {
      setError("Invalid Certificate ❌");
      setSearched(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-green-600">
            Verify Certificate
          </h2>

          <form onSubmit={handleVerify}>
            <div className="mb-4">
              <label className="block mb-1 text-gray-600">
                Certificate ID
              </label>
              <input
                type="text"
                value={certificateId}
                onChange={(e) => setCertificateId(e.target.value)}
                placeholder="Enter Certificate ID"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 disabled:bg-green-300"
            >
              {loading ? "Verifying..." : "Verify"}
            </button>
          </form>

          <div className="mt-6">
            {certificate && (
              <div className="bg-green-100 border border-green-300 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-green-700 mb-3">
                  Certificate Verified Successfully ✅
                </h3>

                <p>
                  <strong>Student Name:</strong> {certificate.student_name}
                </p>
                <p>
                  <strong>Course:</strong> {certificate.course_name}
                </p>
                <p>
                  <strong>Certificate ID:</strong> {certificate.certificate_id}
                </p>
                <p>
                  <strong>Issue Date:</strong> {certificate.issue_date}
                </p>
                <p>
                  <strong>Status:</strong> {certificate.status}
                </p>
              </div>
            )}

            {searched && error && (
              <div className="bg-red-100 border border-red-300 p-4 rounded-lg text-red-600 font-medium">
                {error}
              </div>
            )}
          </div>

          <button
            onClick={() => navigate("/")}
            className="mt-4 text-green-600 hover:underline text-sm"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </>
  );
};

export default VerifyCertificate;