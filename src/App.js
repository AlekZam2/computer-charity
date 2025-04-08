import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Home from "./pages/Home";
import Donate from "./pages/Donate";
import Request from "./pages/Request";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="donate" element={<Donate />} />
            <Route path="request" element={<Request />} />
            <Route path="admin" element={<AdminDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
