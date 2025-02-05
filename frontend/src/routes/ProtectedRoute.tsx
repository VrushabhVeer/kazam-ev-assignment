import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  // const isAuthenticated = localStorage.getItem("token");
  const isAuthenticated = true;
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
