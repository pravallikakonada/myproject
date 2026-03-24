// src/pages/CertificatePage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const CertificatePage = () => {
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");     // Editable name
  const [course, setCourse] = useState(""); // Editable course

  useEffect(() => {
    // Backend nundi student details fetch cheyyadam
    axios.get("/api/student/certificate")
      .then((res) => {
        setStudent(res.data);
        setName(res.data.name);    // default name
        setCourse(res.data.course); // default course
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleDownload = () => {
    if (!name.trim() || !course.trim()) {
      alert("Please enter your name and course before downloading!");
      return;
    }

    axios({
      url: `/api/student/certificate/download/${student.id}`,
      method: "POST",      // POST better to send data
      responseType: "blob",
      data: { name, course },
    }).then((res) => {
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${name}_${course}_certificate.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    }).catch(() => alert("Certificate download failed!"));
  };

  if (loading) return <p className="text-center mt-20 text-gray-600">Loading...</p>;
  if (!student) return <p className="text-center mt-20 text-red-500">No certificate available.</p>;

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center mt-20">
        <div className="bg-white shadow-lg rounded-xl p-8 w-96 text-center">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Certificate Ready 🎉</h2>

          {/* Editable Name Input */}
          <div className="mb-4 text-left">
            <label className="block text-gray-700 mb-2 font-semibold">Enter Your Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Editable Course Input */}
          <div className="mb-4 text-left">
            <label className="block text-gray-700 mb-2 font-semibold">Enter Course:</label>
            <input
              type="text"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <p className="text-gray-700 mb-6"><strong>Status:</strong> Completed</p>

          <div className="flex justify-center gap-4">
            <button
              onClick={handleDownload}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Download Certificate
            </button>
            <button
              onClick={() => navigate("/dashboard")}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg transition"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CertificatePage;