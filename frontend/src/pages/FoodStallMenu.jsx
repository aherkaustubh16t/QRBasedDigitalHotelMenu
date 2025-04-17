import React from "react";
import Header from "../components/Customers/Header";
import MenuSection from "../components/Customers/MenuSection";
import Footer from "../components/Customers/Footer";
import SpecialOfferSection from "../components/Customers/SpecialOfferSection";

const FoodStallMenu = () => {
  const menuData = [
    {
      category: "Starters | स्टार्टर",
      items: [
        {
          id: 1,
          name: "Classic Burger | क्लासिक बर्गर",
          description:
            "Juicy beef patty with lettuce, tomato, and cheese | रसदार बीफ पॅटी, लेट्यूस, टोमॅटो आणि चीज",
          price: "₹199",
          image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
          veg: false,
          spicyLevel: 1,
        },
        {
          id: 2,
          name: "Spicy Chicken Wings | मसालेदार चिकन विंग्स",
          description:
            "Crispy wings tossed in buffalo sauce | क्रिस्पी विंग्स बफॅलो सॉसमध्ये",
          price: "₹249",
          image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f",
          veg: false,
          spicyLevel: 3,
        },
        {
          id: 3,
          name: "Paneer Tikka | पनीर टिक्का",
          description:
            "Grilled cottage cheese with spices | मसाल्यात मऊ पनीरचे तुकडे",
          price: "₹179",
          image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
          veg: true,
          spicyLevel: 2,
        },
      ],
    },
    {
      category: "Main Course | मुख्य जेवण",
      items: [
        {
          id: 4,
          name: "Margherita Pizza | मार्गरिटा पिझ्झा",
          description:
            "Mozzarella, basil, and tomato sauce | मोझरेला चीज, तुळशी आणि टोमॅटो सॉस",
          price: "₹299",
          image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
          veg: true,
          spicyLevel: 1,
        },
        {
          id: 5,
          name: "Butter Chicken | बटर चिकन",
          description:
            "Tandoori chicken in creamy tomato gravy | टंडूरी चिकनची मक्याची सॉस",
          price: "₹349",
          image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
          veg: false,
          spicyLevel: 2,
        },
        {
          id: 6,
          name: "Dal Tadka | दाल तडका",
          description:
            "Yellow lentils tempered with spices | हळद-मिरची घालून केलेली डाळ",
          price: "₹149",
          image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
          veg: true,
          spicyLevel: 1,
        },
      ],
    },
    {
      category: "Indian Breads | भारतीय भाकरी",
      items: [
        {
          id: 7,
          name: "Garlic Naan | लसूण नान",
          description: "Soft bread with garlic butter | लसूण लोणच्यासह मऊ नान",
          price: "₹49",
          image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a",
          veg: true,
          spicyLevel: 0,
        },
        {
          id: 8,
          name: "Roti | रोटी",
          description: "Whole wheat flatbread | गव्हाच्या पिठाची भाकरी",
          price: "₹25",
          image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
          veg: true,
          spicyLevel: 0,
        },
      ],
    },
    {
      category: "Desserts | डेझर्ट",
      items: [
        {
          id: 9,
          name: "Gulab Jamun | गुलाब जामुन",
          description:
            "Deep-fried milk balls in sugar syrup | दुधाच्या बॉल्स साखर सिरपमध्ये",
          price: "₹89",
          image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d",
          veg: true,
          spicyLevel: 0,
        },
        {
          id: 10,
          name: "Chocolate Lava Cake | चॉकलेट लावा केक",
          description:
            "Warm cake with molten chocolate | गरम केकमध्ये वितळलेले चॉकलेट",
          price: "₹99",
          image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d",
          veg: true,
          spicyLevel: 0,
        },
      ],
    },
    {
      category: "Beverages | शीतपेय",
      items: [
        {
          id: 11,
          name: "Mango Lassi | आम्र लस्सी",
          description:
            "Sweet yogurt drink with mango | आम्राच्या प्युरीसह गोड दही पेय",
          price: "₹79",
          image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a",
          veg: true,
          spicyLevel: 0,
        },
        {
          id: 12,
          name: "Masala Chai | मसाला चहा",
          description:
            "Spiced Indian tea with milk | दुधासह मसालेदार भारतीय चहा",
          price: "₹49",
          image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5",
          veg: true,
          spicyLevel: 1,
        },
      ],
    },
    {
      category: "Breakfast | नाश्ता",
      items: [
        {
          id: 13,
          name: "Masala Omelette | मसाला ऑम्लेट",
          description:
            "Eggs with onions, tomatoes, and spices | कांदा, टोमॅटो आणि मसाले घातलेले अंडे",
          price: "₹129",
          image: "https://images.unsplash.com/photo-1551782450-17144efb9c50",
          veg: false,
          spicyLevel: 2,
        },
        {
          id: 14,
          name: "Poha | पोहा",
          description:
            "Flattened rice with peanuts and curry leaves | शेंगदाणे आणि कढीपत्त्यासह चेऊर",
          price: "₹89",
          image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
          veg: true,
          spicyLevel: 1,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-400 text-white font-serif">
      <Header />
      {/* <SpecialOfferSection /> */}
      <MenuSection menuData={menuData} />
      <Footer />
    </div>
  );
};

export default FoodStallMenu;
