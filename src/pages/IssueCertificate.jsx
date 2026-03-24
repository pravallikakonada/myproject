import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";

const IssueCertificate = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const passedData = location.state || {};

  const [studentName] = useState(passedData.studentName || "");
  const [courseName] = useState(passedData.courseName || "");
  const [successMessage, setSuccessMessage] = useState("");
  const [generatedCertificateId, setGeneratedCertificateId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const isPassed = localStorage.getItem("passed");

    if (isPassed !== "true") {
      alert("You must pass the test to get certificate ❌");
      navigate("/courses");
    }
  }, [navigate]);

  const handleIssueCertificate = async (e) => {
    e.preventDefault();

    setSuccessMessage("");
    setGeneratedCertificateId("");
    setErrorMessage("");

    if (!studentName || !courseName) {
      setErrorMessage("Student details not found ❌");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/create-certificate/",
        {
          student_name: studentName,
          course_name: courseName,
        }
      );

      setSuccessMessage("Certificate issued successfully ✅");
      setGeneratedCertificateId(response.data.certificate_id);

      localStorage.removeItem("passed");
    } catch (error) {
      console.error(
        "Certificate issue error:",
        error.response?.data || error.message
      );
      setErrorMessage(
        error.response?.data?.error || "Error issuing certificate ❌"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">
          <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
            Issue Certificate
          </h2>

          <form onSubmit={handleIssueCertificate} className="space-y-5">
            <div className="bg-gray-50 border rounded-lg p-4 text-gray-800">
              <p>
                <strong>Student Name:</strong> {studentName}
              </p>
              <p className="mt-3">
                <strong>Course Name:</strong> {courseName}
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition disabled:bg-indigo-300"
            >
              {loading ? "Issuing..." : "Issue Certificate"}
            </button>
          </form>

          {successMessage && (
            <div className="mt-6 bg-green-100 border border-green-300 text-green-700 p-4 rounded-lg">
              <p className="font-semibold">{successMessage}</p>
              <p className="mt-2">
                <strong>Generated Certificate ID:</strong>{" "}
                {generatedCertificateId}
              </p>

              <div className="mt-4 flex flex-col gap-3">
                <button
                  onClick={() => navigate("/dashboard")}
                  className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
                >
                  Go to Dashboard
                </button>

                <button
                  onClick={() => navigate("/verify-certificate")}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                >
                  Verify Certificate
                </button>
              </div>
            </div>
          )}

          {errorMessage && (
            <div className="mt-6 bg-red-100 border border-red-300 text-red-700 p-4 rounded-lg">
              {errorMessage}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default IssueCertificate;