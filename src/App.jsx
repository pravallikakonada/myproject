import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CertificateDetails from "./pages/CertificateDetails";
import IssueCertificate from "./pages/IssueCertificate";
import VerifyCertificate from "./pages/VerifyCertificate";

function App() {
  return (
    <Router>
      <Routes>
        
         <Route element={<PrivateRoute />}/>
        <Route path="/" element={<Home />} />
      <Route path="/verify" element={<VerifyCertificate />} />
      <Route path="/Issue" element={<IssueCertificate />} />
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/IssueCertificate" element={<IssueCertificate />} />
        <Route path="/VerifyCertificate" element={<VerifyCertificate />} />
        <Route path="/Certificate/:id" element={<CertificateDetails />} />
      </Routes>
    </Router>
  );
}

export default App;