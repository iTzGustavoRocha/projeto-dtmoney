import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

interface Props {
  children: JSX.Element;
}

export function PrivateRoute({ children }: Props) {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <h1>Carregando...</h1>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}
