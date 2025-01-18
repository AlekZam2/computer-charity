import React from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Home from "./pages/Home";
import Donate from "./pages/Donate";
import Request from "./pages/Request";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="donate" element={<Donate />} />
          <Route path="request" element={<Request />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
