import { Routes, Route } from "react-router-dom";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import ActiveScan from "../pages/ActiveScan";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/ActiveScan" element={<ActiveScan />} />
    </Routes>
  );
}
