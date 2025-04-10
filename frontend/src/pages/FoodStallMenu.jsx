import React from "react";
import Header from "../components/Customers/Header";
import MenuSection from "../components/Customers/MenuSection";
import Footer from "../components/Customers/Footer";

const FoodStallMenu = () => {
  const menuData = [
    {
      category: "Starters | स्टार्टर",
      items: [
        {
          id: 1,
          name: "Classic Burger | क्लासिक बर्गर",
          description:
            "Juicy beef patty with fresh lettuce, tomato, and cheese.",
          price: "₹199",
          image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
        },
        {
          id: 2,
          name: "Spicy Chicken Wings | मसालेदार चिकन विंग्स",
          description: "Crispy wings tossed in our signature buffalo sauce.",
          price: "₹249",
          image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f",
        },
      ],
    },
    {
      category: "Main Course | मुख्य जेवण",
      items: [
        {
          id: 3,
          name: "Margherita Pizza | मार्गरिटा पिझ्झा",
          description:
            "Fresh mozzarella, basil, and tomato sauce on thin crust.",
          price: "₹299",
          image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
        },
        {
          id: 4,
          name: "Vegetable Pasta | भाज्यांचे पास्ता",
          description: "Penne with sautéed vegetables in creamy sauce.",
          price: "₹179",
          image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb",
        },
      ],
    },
    {
      category: "Desserts | डेझर्ट",
      items: [
        {
          id: 5,
          name: "Chocolate Lava Cake | चॉकलेट लावा केक",
          description: "Warm cake with a gooey molten chocolate center.",
          price: "₹99",
          image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d",
        },
      ],
    },
    {
      category: "Beverages | शीतपेय",
      items: [
        {
          id: 6,
          name: "Iced Coffee | आईस्ड कॉफी",
          description: "Chilled coffee with vanilla and cream.",
          price: "₹79",
          image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-400 text-white font-serif">
      <Header />
      <MenuSection menuData={menuData} />
      <Footer />
    </div>
  );
};

export default FoodStallMenu;
