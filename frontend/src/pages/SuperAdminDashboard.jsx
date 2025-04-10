import React, { useState } from "react";
import Header from "../components/SuperAdmin/Header";
import StatsCards from "../components/SuperAdmin/StatsCards";
import StallsTable from "../components/SuperAdmin/StallsTable";
import MenuModal from "../components/SuperAdmin/MenuModal";
import AddStallModal from "../components/SuperAdmin/AddStallModal";
import EditStallModal from "../components/SuperAdmin/EditStallModal";
import DeleteConfirmationModal from "../components/SuperAdmin/DeleteConfirmationModal";
import { useNavigate } from "react-router-dom";

const stallsData = [
  {
    id: "STL001",
    name: "Spicy Bites",
    admin: "John Doe",
    password: "password123",
    visitors: { "24h": 30, "5d": 120, "15d": 200, "30d": 400, allTime: 750 },
    qrCode: "Hotel001",
  },
  {
    id: "STL002",
    name: "Quick Snacks",
    admin: "Jane Smith",
    password: "password456",
    visitors: { "24h": 20, "5d": 100, "15d": 180, "30d": 350, allTime: 650 },
    qrCode: "Hotel002",
  },
  {
    id: "STL003",
    name: "Grill House",
    admin: "Alice Johnson",
    password: "password789",
    visitors: { "24h": 50, "5d": 150, "15d": 300, "30d": 600, allTime: 1100 },
    qrCode: "Hotel003",
  },
];

const menus = {
  STL001: [
    { name: "Burger", price: "$5" },
    { name: "Pizza", price: "$8" },
    { name: "Fries", price: "$3" },
  ],
  STL002: [
    { name: "Pasta", price: "$7" },
    { name: "Salad", price: "$6" },
  ],
  STL003: [
    { name: "Grilled Chicken", price: "$10" },
    { name: "BBQ Ribs", price: "$12" },
  ],
};

const SuperAdminDashboard = () => {
  const [stalls, setStalls] = useState(stallsData);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [isAddStallModalOpen, setIsAddStallModalOpen] = useState(false);
  const [visitorFilter, setVisitorFilter] = useState("allTime");
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [newStall, setNewStall] = useState({
    name: "",
    admin: "",
    password: "",
    visitors: { "24h": 0, "5d": 0, "15d": 0, "30d": 0, allTime: 0 },
    qrCode: "",
  });
  const [editingStall, setEditingStall] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [stallToDelete, setStallToDelete] = useState(null);
  const Navigate = useNavigate();

  // ... (same functions as before)
  // Define the toggleProfileDropdown function
  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  // Define the handleLogout function
  const handleLogout = () => {
    console.log("Logged out");
    Navigate("/");
  };

  // Define other functions as needed
  const handleDeleteStall = (id) => {
    setStalls(stalls.filter((stall) => stall.id !== id));
  };

  const handleViewMenu = (stallId) => {
    setSelectedMenu(menus[stallId] || []);
    setIsMenuModalOpen(true);
  };

  const closeMenuModal = () => {
    setIsMenuModalOpen(false);
    setSelectedMenu(null);
  };

  const openAddStallModal = () => {
    setIsAddStallModalOpen(true);
  };

  const closeAddStallModal = () => {
    setIsAddStallModalOpen(false);
    setNewStall({
      name: "",
      admin: "",
      password: "",
      visitors: { "24h": 0, "5d": 0, "15d": 0, "30d": 0, allTime: 0 },
      qrCode: "",
    });
  };

  const handleAddStall = () => {
    // console.log();
    const newId = `Hotel${stalls.length + 1}_${newStall.name.replace(" ", "")}`;
    const qrCodeData = newId;
    const newStallData = { ...newStall, id: newId, qrCode: qrCodeData };
    setStalls([...stalls, newStallData]);
    closeAddStallModal();
  };

  const handleViewDetails = (stallId) => {
    Navigate(`/hotel-details/${stallId}`);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStall({ ...newStall, [name]: value });
  };

  const openEditStallModal = (stall) => {
    setEditingStall(stall);
  };

  const closeEditStallModal = () => {
    setEditingStall(null);
  };

  const handleUpdateStall = () => {
    setStalls((prevStalls) =>
      prevStalls.map((stall) =>
        stall.id === editingStall.id ? editingStall : stall
      )
    );
    closeEditStallModal();
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditingStall({ ...editingStall, [name]: value });
  };
  return (
    <div className="relative min-h-screen bg-black text-white font-serif pt-36 md:pt-28">
      <Header
        toggleProfileDropdown={toggleProfileDropdown}
        isProfileDropdownOpen={isProfileDropdownOpen}
        handleLogout={handleLogout}
      />

      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6 top-20">
        <StatsCards
          stalls={stalls}
          visitorFilter={visitorFilter}
          setVisitorFilter={setVisitorFilter}
        />

        <div className="bg-orange-700 p-4 sm:p-6 rounded-lg shadow-lg">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">
            Manage Hotels
          </h2>
          <button
            onClick={openAddStallModal}
            className="bg-yellow-400 text-orange-900 px-4 py-2 rounded-lg font-semibold hover:bg-black hover:text-white mb-4 cursor-pointer transition"
          >
            + Add New Hotel
          </button>

          <StallsTable
            stalls={stalls}
            visitorFilter={visitorFilter}
            openEditStallModal={openEditStallModal}
            setStallToDelete={setStallToDelete}
            setIsDeleteModalOpen={setIsDeleteModalOpen}
            handleViewMenu={handleViewMenu}
            handleViewDetails={handleViewDetails} // 👈 pass this
          />
        </div>
      </div>

      <MenuModal
        isMenuModalOpen={isMenuModalOpen}
        closeMenuModal={closeMenuModal}
        selectedMenu={selectedMenu}
      />

      <AddStallModal
        isAddStallModalOpen={isAddStallModalOpen}
        closeAddStallModal={closeAddStallModal}
        newStall={newStall}
        handleInputChange={handleInputChange}
        handleAddStall={handleAddStall}
      />

      <EditStallModal
        editingStall={editingStall}
        closeEditStallModal={closeEditStallModal}
        handleEditInputChange={handleEditInputChange}
        handleUpdateStall={handleUpdateStall}
      />

      <DeleteConfirmationModal
        isDeleteModalOpen={isDeleteModalOpen}
        setIsDeleteModalOpen={setIsDeleteModalOpen}
        handleDeleteStall={handleDeleteStall}
        stallToDelete={stallToDelete}
      />
    </div>
  );
};

export default SuperAdminDashboard;
