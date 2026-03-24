import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CertificateTemplate = () => {
  const { id } = useParams();
  const [certificate, setCertificate] = useState(null);

  useEffect(() => {
    fetch
      .then((res) => res.json())
      .then((data) => setCertificate(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!certificate) {
    return <h2 style={{ textAlign: "center" }}>Loading Certificate...</h2>;
  }

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      
      <div
        style={{
          width: "800px",
          margin: "auto",
          padding: "40px",
          border: "10px solid #4f46e5",
          borderRadius: "10px",
          backgroundColor: "#f9fafb"
        }}
      >
        <h1 style={{ color: "#4f46e5" }}>
          {certificate.organization_name}
        </h1>

        <h2 style={{ marginTop: "20px" }}>
          Certificate of Completion
        </h2>

        <p style={{ marginTop: "30px", fontSize: "18px" }}>
          This is to certify that
        </p>

        <h1 style={{ color: "#111827", marginTop: "10px" }}>
          {certificate.student_name}
        </h1>

        <p style={{ marginTop: "20px", fontSize: "18px" }}>
          has successfully completed the course
        </p>

        <h2 style={{ color: "#4f46e5" }}>
          {certificate.course_name}
        </h2>

        <p style={{ marginTop: "20px" }}>
          Certificate ID : <b>{certificate.certificate_id}</b>
        </p>

        <p>
          Issue Date : <b>{certificate.issue_date}</b>
        </p>

        <div style={{ marginTop: "50px" }}>
          <p>Authorized Signature</p>
          <hr style={{ width: "200px", margin: "auto" }} />
        </div>

        <button
          style={{
            marginTop: "30px",
            padding: "10px 20px",
            backgroundColor: "#4f46e5",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Download Certificate
        </button>

      </div>
    </div>
  );
};

export default CertificateTemplate;