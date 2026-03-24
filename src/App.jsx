import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CoursesPage from "./pages/CoursesPage";
import IssueCertificate from "./pages/IssueCertificate";
import VerifyCertificate from "./pages/VerifyCertificate";
import StudentDetails from "./pages/StudentDetails";
import Assessment from "./pages/Assessment";
import Result from "./pages/Result";
import RequestCertificate from "./pages/RequestCertificate";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/student-details" element={<StudentDetails />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/result" element={<Result />} />
        <Route path="/request-certificate" element={<RequestCertificate />} />
        <Route path="/issue-certificate" element={<IssueCertificate />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/verify-certificate" element={<VerifyCertificate />} />
      </Routes>
    </Router>
  );
}

export default App;