import { useParams } from "react-router-dom";
import CertificateCard from "../components/CertificateCard";

const CertificateDetails = () => {
  const { id } = useParams();

  // Dummy frontend data
  const certificate = {
    certificate_id: id,
    student_name: "Aditya Kumar",
    course_name: "React Development",
    college_name: "ABC Engineering College",
    issue_date: "2026-02-20",
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Certificate Details Page</h1>
      <CertificateCard certificate={certificate} />
    </div>
  );
};

export default CertificateDetails;