import React from "react";
import AnimatedText from "../AnimatedText";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {/* About the Food Stall */}
        <div>
          <h3 className="text-lg font-semibold text-orange-400">About Us</h3>
          <p className="text-gray-400 mt-2 leading-relaxed">
            <p className="pb-4">
              <strong>Delicious Bites</strong> is committed to serving fresh,
              hygienic, and mouth-watering dishes. We bring you the authentic
              taste of traditional and modern flavors with high-quality
              ingredients. Your satisfaction is our priority!{" "}
            </p>
            <p>
              <strong>चविष्ट पदार्थ</strong> ताजे, स्वच्छ आणि तोंडाला पाणी
              आणणारे पदार्थ देण्यासाठी वचनबद्ध आहे. आम्ही तुमच्यासाठी उच्च
              दर्जाच्या घटकांसह पारंपारिक आणि आधुनिक चवींचा अस्सल चव आणतो. तुमचे
              समाधान ही आमची प्राथमिकता आहे!
            </p>
          </p>
          <p className="mt-3 text-orange-300 font-medium">
            🍽 Fresh Ingredients | 🚀 Quick Service | 🔥 Authentic Taste
          </p>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold text-orange-400">
            Get in Touch
          </h3>
          <p className="text-gray-400 mt-2">
            📍 <strong>Location:</strong> 123 Food Street, Mumbai
          </p>
          <p className="text-gray-400">
            📞 <strong>Phone:</strong> +91 98765 43210
          </p>
          <p className="text-gray-400">
            🕒 <strong>Opening Hours:</strong> 10 AM - 11 PM (Mon-Sun)
          </p>
        </div>
      </div>

      {/* Copyright & Credits */}
      <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400 text-sm">
        <p>
          © {new Date().getFullYear()} Delicious Bites. All rights reserved.
        </p>
        <p className="mt-1">
          Designed & Developed by{" "}
          <AnimatedText
            prefix={["Scan"]}
            words={["Eat", "It"]}
            color="text-orange-400"
          />
          <p>
            <h3 className="text-lg font-semibold pt-4 pb-2 px-2 text-orange-400">
              " Contact us to get your menu digitized! "
            </h3>
            <p className="text-gray-400 pb-2">
              📞 +91 7249734437 || 9527285116
            </p>
            <p className="text-gray-400">📧 scanitcontact@gmail.com</p>
          </p>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
