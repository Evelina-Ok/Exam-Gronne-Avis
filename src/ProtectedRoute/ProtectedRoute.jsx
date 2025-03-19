import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/userContext"; 

export function ProtectedRoute() {
  const { userData } = useContext(UserContext);

  return userData ? <Outlet /> : <Navigate to="/login" />;
}