import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DashboardBg from "../assets/dashboard-bg.jpg";
import Loader from "../components/Loader";

const Dashboard = () => {
  const navigate = useNavigate();
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/certificates/")
      .then((response) => {
        setCertificates(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching certificates:", error);
        setLoading(false);
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div
      className="min-h-screen p-6 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${DashboardBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-indigo-700">
            Admin Dashboard
          </h1>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">

          {/* Total Certificates */}
          <div className="bg-white shadow-lg p-6 rounded-xl text-center">
            <h2 className="text-xl font-semibold text-gray-600">
              Total Certificates
            </h2>
            <p className="text-3xl font-bold text-indigo-600 mt-2">
              {certificates.length}
            </p>
          </div>

          {/* Issue Certificate */}
          <div className="bg-white shadow-lg p-6 rounded-xl text-center">
            <h2 className="text-xl font-semibold text-gray-600">
              Issue Certificate
            </h2>
            <button
              onClick={() => navigate("/issue")}
              className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
            >
              Go
            </button>
          </div>

          {/* Verify Certificate */}
          <div className="bg-white shadow-lg p-6 rounded-xl text-center">
            <h2 className="text-xl font-semibold text-gray-600">
              Verify Certificate
            </h2>
            <button
              onClick={() => navigate("/verify")}
              className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Go
            </button>
          </div>

        </div>

        {/* Certificates Table */}
        <div className="bg-white shadow-xl rounded-xl p-6 overflow-x-auto">
          <h2 className="text-xl font-bold mb-4 text-gray-700">
            Certificates List
          </h2>

          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Student Name</th>
                <th className="p-3 text-left">Course</th>
                <th className="p-3 text-left">Issue Date</th>
              </tr>
            </thead>

            <tbody>
              {certificates.length > 0 ? (
                certificates.map((cert) => (
                  <tr key={cert.id} className="border-b hover:bg-gray-100">
                    <td className="p-3">{cert.id}</td>
                    <td className="p-3">{cert.student_name}</td>
                    <td className="p-3">{cert.course_name}</td>
                    <td className="p-3">{cert.issue_date}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="p-4 text-center text-gray-500">
                    No certificates found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;