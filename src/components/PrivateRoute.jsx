import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  // Check token from localStorage
  const token = localStorage.getItem("token");

  // If token exists → allow access
  // If not → redirect to login
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;