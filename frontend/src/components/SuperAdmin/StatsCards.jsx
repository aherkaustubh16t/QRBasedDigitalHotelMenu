import React from "react";
import { FaStore, FaUsers, FaQrcode } from "react-icons/fa";

const StatsCards = ({ stalls, visitorFilter, setVisitorFilter }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="bg-orange-700 p-4 sm:p-6 rounded-lg shadow-lg flex items-center">
        <FaStore className="text-2xl sm:text-3xl text-yellow-400 mr-4" />
        <div>
          <h2 className="text-sm sm:text-lg font-semibold">
            Total Hotels Added
          </h2>
          <p className="text-2xl sm:text-4xl font-bold text-center text-yellow-200">
            {stalls.length}
          </p>
        </div>
      </div>

      <div className="bg-orange-700 p-4 sm:p-6 rounded-lg shadow-lg flex items-center">
        <FaUsers className="text-2xl sm:text-3xl text-yellow-400 mr-4" />
        <div>
          <h2 className="text-sm sm:text-lg font-semibold">
            Total Hotel Admins
          </h2>
          <p className="text-2xl sm:text-4xl font-bold text-center text-yellow-200">
            10
          </p>
        </div>
      </div>

      <div className="bg-orange-700 p-4 sm:p-6 rounded-lg shadow-lg flex items-center">
        <FaQrcode className="text-2xl sm:text-3xl text-yellow-400 mr-4" />
        <div>
          <h2 className="text-sm sm:text-lg font-semibold">
            QR Codes Generated
          </h2>
          <p className="text-2xl sm:text-4xl font-bold text-center text-yellow-200">
            {stalls.length}
          </p>
        </div>
      </div>

      <div className="bg-orange-700 p-4 sm:p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center gap-2">
          <h2 className="text-sm sm:text-lg font-semibold">Total Visitors</h2>
          <select
            className="bg-yellow-400 text-orange-900 px-1 py-1 rounded-lg font-semibold hover:bg-yellow-500 cursor-pointer transition"
            onChange={(e) => setVisitorFilter(e.target.value)}
            value={visitorFilter}
          >
            <option value="24h">Last 24 Hours</option>
            <option value="5d">Last 5 Days</option>
            <option value="15d">Last 15 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="allTime">All Time</option>
          </select>
        </div>
        <p className="text-2xl sm:text-4xl font-bold text-center text-yellow-200">
          {stalls.reduce(
            (sum, stall) => sum + stall.visitors[visitorFilter],
            0
          )}
        </p>
      </div>
    </div>
  );
};

export default StatsCards;
