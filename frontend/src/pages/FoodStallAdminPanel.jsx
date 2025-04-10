import React, { useState } from "react";
import Header from "../components/StallAdmin/Header";
import AddMenuItemForm from "../components/StallAdmin/AddMenuItemForm";
import MenuItemsList from "../components/StallAdmin/MenuItemsList";
import EditMenuItemModal from "../components/StallAdmin/EditMenuItemModal";
import DeleteConfirmationModal from "../components/StallAdmin/DeleteConfirmationModal";
import EditStallDetailsModal from "../components/StallAdmin/EditStallDetailsModal";

const FoodStallAdminPanel = () => {
  const [stallDetails, setStallDetails] = useState({
    name: "Spicy Bites",
    location: "Not Set",
    locationMarathi: "सेट नाही",
    phone: "Not Set",
    openingHours: "Not Set",
    description: "Not Set",
    descriptionMarathi: "सेट नाही",
    highlights: [],
  });

  const [menu, setMenu] = useState([
    {
      id: "1",
      name: "Burger",
      nameMarathi: "बर्गर",
      price: "50",
      category: "Fast Food",
      description: "Juicy beef patty with fresh veggies",
      descriptionMarathi: "रसाळ बीफ पॅटी आणि ताजी भाज्या",
      image: "https://via.placeholder.com/150",
    },
    {
      id: "2",
      name: "Pizza",
      nameMarathi: "पिझ्झा",
      price: "80",
      category: "Fast Food",
      description: "Cheesy pizza with assorted toppings",
      descriptionMarathi: "चीजचा पिझ्झा आणि विविध टॉपिंग्ज",
      image: "https://via.placeholder.com/150",
    },
    {
      id: "3",
      name: "Fries",
      nameMarathi: "फ्रायस्",
      price: "30",
      category: "Sides",
      description: "Crispy golden french fries",
      descriptionMarathi: "कुरकुरीत सोनेरी फ्रेंच फ्रायस्",
      image: "https://via.placeholder.com/150",
    },
  ]);

  const [editingMenuItem, setEditingMenuItem] = useState(null);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [isEditingStallDetails, setIsEditingStallDetails] = useState(false);

  const handleAddMenuItem = (newItem) => {
    const newMenuItem = {
      id: String(menu.length + 1),
      ...newItem,
      image: URL.createObjectURL(newItem.image),
    };
    setMenu([...menu, newMenuItem]);
  };

  const handleEditMenuItem = (updatedItem) => {
    const updatedMenu = menu.map((item) =>
      item.id === updatedItem.id
        ? {
            ...item,
            name: updatedItem.name,
            nameMarathi: updatedItem.nameMarathi,
            price: updatedItem.price,
            category: updatedItem.category,
            description: updatedItem.description,
            descriptionMarathi: updatedItem.descriptionMarathi,
            image: updatedItem.image
              ? URL.createObjectURL(updatedItem.image)
              : item.image,
          }
        : item
    );
    setMenu(updatedMenu);
    setEditingMenuItem(null);
  };

  const handleDeleteMenuItem = () => {
    const updatedMenu = menu.filter((item) => item.id !== itemToDelete);
    setMenu(updatedMenu);
    setItemToDelete(null);
  };

  return (
    <div className="min-h-screen bg-black text-white font-serif p-6">
      <Header stallName={stallDetails.name} />

      {/* Personal Details Section */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6 max-w-3xl w-full mx-auto">
        <div className="flex flex-wrap justify-between items-center mb-4">
          <h2 className="text-xl md:text-2xl font-bold text-yellow-400">
            Personal Details | वैयक्तिक तपशील
          </h2>
          <button
            onClick={() => setIsEditingStallDetails(true)}
            className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400 text-sm md:text-base cursor-pointer"
          >
            Edit Details | तपशील संपादित करा
          </button>
        </div>
        <div className="space-y-2 text-sm md:text-base text-gray-200">
          <p>
            <strong>📍 Location | स्थान:</strong> {stallDetails.location} |{" "}
            {stallDetails.locationMarathi}
          </p>
          <p>
            <strong>📞 Phone | फोन:</strong> {stallDetails.phone}
          </p>
          <p>
            <strong>🕒 Opening Hours | उघडण्याचे वेळ:</strong>{" "}
            {stallDetails.openingHours}
          </p>
          <p>
            <strong>ℹ️ Description | वर्णन:</strong> {stallDetails.description}{" "}
            | {stallDetails.descriptionMarathi}
          </p>
          <p>
            <strong>✨ Highlights:</strong>
            <div className="flex flex-wrap gap-2 mt-2">
              {stallDetails.highlights.map((highlight, index) => (
                <span
                  key={index}
                  className="bg-yellow-500 text-gray-900 text-xs px-2 py-1 rounded-full"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </p>
        </div>
      </div>

      <AddMenuItemForm
        onAddMenuItem={handleAddMenuItem}
        bilingual // Pass a prop to indicate bilingual support
      />

      <MenuItemsList
        menu={menu}
        onEdit={setEditingMenuItem}
        onDelete={setItemToDelete}
        bilingual // Pass a prop to indicate bilingual support
      />

      {editingMenuItem && (
        <EditMenuItemModal
          editingMenuItem={editingMenuItem}
          onClose={() => setEditingMenuItem(null)}
          onSave={handleEditMenuItem}
          bilingual // Pass a prop to indicate bilingual support
        />
      )}

      {itemToDelete && (
        <DeleteConfirmationModal
          onClose={() => setItemToDelete(null)}
          onConfirm={handleDeleteMenuItem}
        />
      )}

      {isEditingStallDetails && (
        <EditStallDetailsModal
          stallDetails={stallDetails}
          onClose={() => setIsEditingStallDetails(false)}
          onSave={(updatedDetails) => {
            setStallDetails(updatedDetails);
            setIsEditingStallDetails(false);
          }}
        />
      )}
    </div>
  );
};

export default FoodStallAdminPanel;
