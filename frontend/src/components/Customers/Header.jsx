import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-5 text-center shadow-2xl rounded-bl-full">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold pb-4">
          <p className="pb-4">Food Stall Name</p>
          <p>फूड स्टॉलचे नाव</p>
        </h1>
        <p className="text-lg text-orange-200 mt-2 text-right">
          Serving the best food in town! <br /> शहरातील सर्वोत्तम खाद्यपदार्थ.
        </p>
      </div>
    </header>
  );
};

export default Header;
