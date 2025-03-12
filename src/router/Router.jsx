import React from "react";
import { BrowserRouter, Route, Routes , Navigate } from "react-router-dom";
import { auth } from "../../firebaseconfig";
import { useAuthState } from "react-firebase-hooks/auth";
import Home from "../pages/Home";
import Contactus from "../pages/Contactus";
import Navbar from "../components/Navbar";
import Whyus from "../pages/Whyus";
import Procedure from "../pages/Procedure";
import Dashboard from "../admin/pages/Dashboard";
import Login from "../admin/components/Login";

const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  if (loading) return <p>Loading...</p>;

  return user ? children : <Navigate to="/login" />;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/why-us" element={<Whyus />} />
        <Route path="/procedure" element={<Procedure />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
