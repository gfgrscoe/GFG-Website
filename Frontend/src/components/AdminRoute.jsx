import React from "react";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const token = localStorage.getItem("gfg_admin_token");

  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default AdminRoute;
