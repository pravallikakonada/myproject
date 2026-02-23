import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const IssueCertificate = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    student_name: "",
    course_name: "",
    college_name: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/certificates/",
        formData
      );

      setMessage("Certificate Issued Successfully ✅");
      setLoading(false);

      // Redirect to certificate details page
      navigate(`/certificate/${response.data.id || response.data.certificate_id}`);

    } catch (error) {
      setMessage("Failed to Issue Certificate ❌");
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 p-6">

      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg">

        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Issue Certificate
        </h2>

        {message && (
          <p className="text-center mb-4 font-semibold text-green-600">
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="student_name"
            placeholder="Student Name"
            value={formData.student_name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="text"
            name="course_name"
            placeholder="Course Name"
            value={formData.course_name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="text"
            name="college_name"
            placeholder="College Name"
            value={formData.college_name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            {loading ? "Issuing..." : "Issue Certificate"}
          </button>

        </form>

      </div>

    </div>
  );
};

export default IssueCertificate;