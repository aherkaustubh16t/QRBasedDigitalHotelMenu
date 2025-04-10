import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SuperAdminDashboard from "./pages/SuperAdminDashboard";
import FoodStallAdminPanel from "./pages/FoodStallAdminPanel";
import FoodStallMenu from "./pages/FoodStallMenu";
import Login from "./pages/Login";
import HotelDetails from "./pages/HotelDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/super-admin" element={<SuperAdminDashboard />} />
        <Route path="/hotel-details/:hotelI" element={<HotelDetails />} />
        <Route path="/hotel-admin" element={<FoodStallAdminPanel />} />
        <Route path="/menu" element={<FoodStallMenu />} />
      </Routes>
    </Router>
  );
}

export default App;
