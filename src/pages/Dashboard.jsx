import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DashboardBg from "../assets/dashboard-bg.jpg";

const Dashboard = () => {
  const navigate = useNavigate();
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/certificates/")
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

  return (
    <div
      className="min-h-screen p-6 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${DashboardBg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10">

        {/* Header Section */}
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

          <div className="bg-white shadow-lg p-6 rounded-xl text-center">
            <h2 className="text-xl font-semibold text-gray-600">
              Total Certificates
            </h2>
            <p className="text-3xl font-bold text-indigo-600 mt-2">
              {certificates.length}
            </p>
          </div>

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
        <div className="bg-white shadow-xl rounded-xl p-6">
          {/* Table content here */}
        </div>

      </div>
    </div>
  );
};

export default Dashboard;