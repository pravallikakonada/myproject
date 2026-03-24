import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";

const Dashboard = () => {
  const [certificates, setCertificates] = useState([]);

  const fetchCertificates = () => {
    axios
      .get("http://127.0.0.1:8000/api/certificates/")
      .then((res) => {
        setCertificates(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchCertificates();
  }, []);

  const handleDelete = (certificate_id) => {
    if (!window.confirm("Are you sure you want to delete?")) return;

    axios
      .delete(`http://127.0.0.1:8000/api/delete-certificate/${certificate_id}/`)
      .then(() => {
        alert("Deleted successfully");
        fetchCertificates();
      })
      .catch((err) => {
        console.error(err);
        alert("Error deleting");
      });
  };

  const handleDownload = (certificate_id) => {
    window.open(
      `http://127.0.0.1:8000/api/download-certificate/${certificate_id}/`,
      "_blank"
    );
  };

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold text-indigo-700 mb-8 text-center">
          Dashboard
        </h1>

        {certificates.length === 0 ? (
          <p className="text-center text-gray-600">No certificates found.</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-white shadow-lg rounded-xl p-6">
                <h2 className="text-xl font-bold text-indigo-600 mb-2">
                  {cert.student_name}
                </h2>

                <p><b>Course:</b> {cert.course_name}</p>
                <p><b>ID:</b> {cert.certificate_id}</p>
                <p><b>Date:</b> {cert.issue_date}</p>
                <p className="text-green-600 font-semibold">{cert.status}</p>

                <button
                  onClick={() => handleDownload(cert.certificate_id)}
                  className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                >
                  Download
                </button>

                <button
                  onClick={() => handleDelete(cert.certificate_id)}
                  className="mt-2 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;