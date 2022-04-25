import { Navigate } from "react-router-dom";
import "./components.css";
export const ProtectedRoute = ({ login, children }) => {
    if (!login) {
      return <Navigate to="/login" replace />;
    }
  
    return children;
  };