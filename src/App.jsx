import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CertificateDetails from "./pages/CertificateDetails";
import IssueCertificate from "./pages/IssueCertificate";

function App() {
  return (
    <Router>
      <Routes>
        
         <Route element={<PrivateRoute />}/>
        <Route path="/" element={<Home />} />
      
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/IssueCertificate" element={<IssueCertificate />} />
        <Route path="/Certificate/:id" element={<CertificateDetails />} />
      </Routes>
    </Router>
  );
}

export default App;