import { BrowserRouter, Route, Routes } from "react-router-dom";

import Index from "../pages/Index";
import { Login } from "../pages/Login";

import { PrivateRoute } from "./PrivateRoute";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <Index />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
