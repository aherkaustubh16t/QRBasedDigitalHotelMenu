import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-orange-700 via-orange-500 to-orange-400  shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Company Logo */}
          <div className="flex-shrink-0">
            <img
              className="h-8 w-auto"
              src="https://via.placeholder.com/150" // Replace with your logo
              alt="Company Logo"
            />
          </div>

          {/* Optional: Add Navigation Links or Actions Here */}
          <div className="flex items-center space-x-4">
            {/* Example: User Profile */}
            <div className="flex items-center">
              <img
                className="h-8 w-8 rounded-full border-2 border-white"
                src="https://via.placeholder.com/150" // Replace with user avatar
                alt="User"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
