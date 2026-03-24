import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";

const CertificateDetails = () => {

  const location = useLocation();

  // data receive
  const student = location.state?.student;
  const course = location.state?.course;
  const certificateId = location.state?.certificateId;

  const date = new Date().toLocaleDateString();

  if (!student || !course) {
    return (
      <>
        <Header />
        <h2 style={{ textAlign: "center", marginTop: "100px" }}>
          No Certificate Data Found
        </h2>
      </>
    );
  }

  return (
    <>
      <Header />

      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#f3f4f6",
          padding: "40px"
        }}
      >

        <div
          style={{
            width: "800px",
            padding: "40px",
            textAlign: "center",
            background: "white",
            border: "8px solid #4f46e5",
            borderRadius: "10px",
            boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
          }}
        >

          <h1 style={{ color: "#4f46e5", marginBottom: "20px" }}>
            CERTIFICATE OF COMPLETION
          </h1>

          <p>This certifies that</p>

          <h2 style={{ margin: "20px 0", fontSize: "30px" }}>
            {student}
          </h2>

          <p>has successfully completed the course</p>

          <h3 style={{ margin: "20px 0", color: "#111" }}>
            {course}
          </h3>

          <p>Date: {date}</p>

          <p>Certificate ID: {certificateId}</p>

          <div style={{ marginTop: "60px" }}>
            <p>______________________</p>
            <p>Authorized Signature</p>
            <p>Digital Learning Organization</p>
          </div>

        </div>

      </div>
    </>
  );
};

export default CertificateDetails;