import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const CertificateCard = ({ certificate }) => {
  if (!certificate) return null;

  const verifyUrl = `http://localhost:5173/verify-certificate/${certificate.certificate_id}`;
  const downloadUrl = `http://localhost:8000/api/download-certificate/${certificate.certificate_id}/`;

  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg mx-auto border border-gray-200">
      <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
        🎓 Digital Certificate
      </h2>

      <div className="space-y-3 text-gray-700 text-lg">
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
          <strong>Status:</strong>{" "}
          <span className="text-green-600 font-semibold">
            {certificate.status}
          </span>
        </p>
      </div>

      <div className="mt-6 flex flex-col items-center">
        <p className="mb-2 text-sm text-gray-500">
          Scan to Verify Certificate
        </p>

        <div className="bg-gray-50 p-3 rounded-xl border">
          <QRCodeCanvas value={verifyUrl} size={130} />
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-500 mb-1">
          Or click below to verify:
        </p>

        <a
          href={verifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline break-all hover:text-blue-800"
        >
          {verifyUrl}
        </a>
      </div>

      <div className="mt-6 text-center">
        <a
          href={downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Download Certificate
        </a>
      </div>

      <p className="text-center text-xs text-gray-400 mt-6">
        This certificate is digitally verified and secure.
      </p>
    </div>
  );
};

export default CertificateCard;