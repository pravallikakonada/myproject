import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";

const RequestCertificate = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state || {};
  const isPassed = data.isPassed || false;

  const handleRequestCertificate = () => {
    navigate("/issue-certificate", {
      state: data,
    });
  };

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl text-center">
          <h2 className="text-3xl font-bold text-indigo-600 mb-6">
            Request for Certificate
          </h2>

          {isPassed ? (
            <>
              <p className="text-lg text-gray-700 mb-6">
                You passed the assessment and are eligible to request your certificate.
              </p>

              <button
                onClick={handleRequestCertificate}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
              >
                Request for Certificate
              </button>
            </>
          ) : (
            <>
              <p className="text-lg text-red-600 font-medium mb-6">
                You are not eligible to request a certificate because you did not pass the test.
              </p>

              <button
                onClick={() => navigate("/courses", { state: data })}
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700"
              >
                Back to Courses
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default RequestCertificate;