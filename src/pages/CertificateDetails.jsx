import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Loader from "../components/Loader";

const CertificateDetails = () => {

  const { id } = useParams(); // URL nundi certificate id
  const [certificate, setCertificate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/certificates/${id}/`)
      .then((response) => {
        setCertificate(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching certificate:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">

        <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-xl">

          <h2 className="text-2xl font-bold text-indigo-600 mb-6 text-center">
            Certificate Details
          </h2>

          {certificate ? (
            <div className="space-y-4">

              <div>
                <p className="text-gray-500">Certificate ID</p>
                <p className="font-semibold">{certificate.id}</p>
              </div>

              <div>
                <p className="text-gray-500">Student Name</p>
                <p className="font-semibold">{certificate.student_name}</p>
              </div>

              <div>
                <p className="text-gray-500">Course Name</p>
                <p className="font-semibold">{certificate.course_name}</p>
              </div>

              <div>
                <p className="text-gray-500">Issue Date</p>
                <p className="font-semibold">{certificate.issue_date}</p>
              </div>

              <div>
                <p className="text-gray-500">Issued By</p>
                <p className="font-semibold">{certificate.issued_by}</p>
              </div>

            </div>
          ) : (
            <p className="text-center text-red-500">
              Certificate not found
            </p>
          )}

        </div>

      </div>
    </>
  );
};

export default CertificateDetails;