import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Status from "./pages/Status";
import Application from "./pages/Application";
import "./style.css";

export default function App() {
  return (
    <Router>
      <nav className="flex justify-center gap-6 bg-black/70 py-4 text-red-500 font-bold">
        <Link to="/">Home</Link>
        <Link to="/status">Status</Link>
        <Link to="/application">Application</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/status" element={<Status />} />
        <Route path="/application" element={<Application />} />
      </Routes>
    </Router>
  );
}
