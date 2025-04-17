import React, { useEffect, useRef, useState } from "react";
import {
  FiClock,
  FiSun,
  FiPackage,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

export default function SpecialOfferSection() {
  const specialOffers = [
    {
      id: 101,
      type: "happy-hour",
      title: "Happy Hour | हॅपी आवर",
      subtitle: "4:00 PM - 7:00 PM Daily | दररोज",
      items: [
        {
          name: "50% Off All Drinks | सर्व पेयांवर ५०% सूट",
          description:
            "All beverages including mocktails and shakes | सर्व पेये including mocktails and shakes",
        },
        {
          name: "Buy 1 Get 1 Free Beer | १ मिळवा १ विनामूल्य",
          description: "On selected domestic beers | निवडक देशी बिअरवर",
        },
      ],
      icon: <FiClock className="text-2xl text-white" />,
    },
    {
      id: 102,
      type: "seasonal",
      title: "Seasonal Specials | हंगामी विशेष",
      subtitle: "Available this month | या महिन्यात उपलब्ध",
      items: [
        {
          name: "Mango Festival Desserts | आंबा उत्सव डेझर्ट",
          description:
            "Special mango-based desserts | आंब्यावर आधारित विशेष डेझर्ट",
        },
        {
          name: "Monsoon Pakoras | पावसाळी पकोडे",
          description:
            "Crispy fritters with masala chai | कुरकुरीत पकोडे मसाला चहासह",
        },
      ],
      icon: <FiSun className="text-2xl text-white" />,
    },
    {
      id: 103,
      type: "combo",
      title: "Combo Meals | कॉम्बो जेवण",
      subtitle: "Great value deals | उत्कृष्ट मूल्य ऑफर",
      items: [
        {
          name: "Family Thali (4 persons) | फॅमिली थाळी (४ जण)",
          description:
            "3 curries, dal, rice, bread, salad, dessert | ३ कोशिंबीर, डाळ, भात, भाकरी, सॅलड, डेझर्ट",
          price: "₹599 (Save ₹200)",
        },
        {
          name: "Burger Combo | बर्गर कॉम्बो",
          description: "Burger + Fries + Drink | बर्गर + फ्राय्स + पेय",
          price: "₹299 (Save ₹50)",
        },
      ],
      icon: <FiPackage className="text-2xl text-white" />,
    },
    {
      id: 104,
      type: "weekend",
      title: "Weekend Special | शनिवार-रविवार विशेष",
      subtitle: "Friday to Sunday | शुक्रवार ते रविवार",
      items: [
        {
          name: "Live BBQ Counter | लाइव बार्बेक्यू",
          description:
            "Custom grilled items with chef's special marinades | शेफच्या विशेष मरीनेडसह",
          price: "₹799 per person | प्रति व्यक्ती",
        },
      ],
      icon: <FiPackage className="text-2xl text-white" />,
    },
  ];

  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % specialOffers.length);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered, specialOffers.length]);

  useEffect(() => {
    if (containerRef.current) {
      const cardWidth = 320; // Adjusted card width
      containerRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  const scrollLeft = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? specialOffers.length - 1 : prev - 1
    );
  };

  const scrollRight = () => {
    setCurrentIndex((prev) => (prev + 1) % specialOffers.length);
  };

  return (
    <section className="py-4 pt-10 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-2 text-orange-700">
          Special Offers & Promotions | विशेष ऑफर
        </h2>
        <p className="text-center text-orange-500 mb-8">
          Limited time deals you don't want to miss | चुकवू नका हे मर्यादित
          कालावधीतील ऑफर
        </p>

        <div className="relative">
          {/* Arrows */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-orange-100 hover:bg-orange-200 p-2 rounded-full shadow-md"
          >
            <FiChevronLeft className="text-orange-700 text-xl" />
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-orange-100 hover:bg-orange-200 p-2 rounded-full shadow-md"
          >
            <FiChevronRight className="text-orange-700 text-xl" />
          </button>

          <div
            ref={containerRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="overflow-x-auto scrollbar-hide"
          >
            <div className="flex gap-6 pb-4 w-max">
              {specialOffers.map((offer) => (
                <div
                  key={offer.id}
                  className={`bg-gradient-to-br from-orange-700 to-orange-500 min-w-[300px] max-w-sm rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300`}
                >
                  <div className="p-6 h-full flex flex-col justify-between">
                    <div className="flex items-center mb-4">
                      <div className="mr-4">{offer.icon}</div>
                      <div>
                        <h3 className="text-lg font-bold">{offer.title}</h3>
                        <p className="text-sm text-orange-100">
                          {offer.subtitle}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {offer.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="border-t border-orange-300 pt-3"
                        >
                          <h4 className="font-semibold text-base">
                            {item.name}
                          </h4>
                          <p className="text-sm text-orange-100">
                            {item.description}
                          </p>
                          {item.price && (
                            <p className="text-yellow-200 font-medium mt-1">
                              {item.price}
                            </p>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-6 gap-2">
          {specialOffers.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition duration-300 ${
                currentIndex === index ? "bg-orange-600" : "bg-orange-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
