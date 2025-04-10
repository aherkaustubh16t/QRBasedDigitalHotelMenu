import React from "react";
import QRCode from "react-qr-code";
import { FaEdit, FaTrash, FaUtensils } from "react-icons/fa";

const StallsTable = ({
  stalls,
  visitorFilter,
  openEditStallModal,
  setStallToDelete,
  setIsDeleteModalOpen,
  handleViewMenu,
  handleViewDetails, // 👈 accept here
}) => {
  return (
    <>
      {/* Table View for MD+ */}
      <div className="hidden md:block">
        <table className="w-full text-white border-collapse">
          <thead>
            <tr className="border-b border-gray-600 text-left">
              <th className="py-2 px-3">Hotel ID</th>
              <th className="py-2 px-3">Name</th>
              <th className="py-2 px-3">Admin</th>
              <th className="py-2 px-3">Visitors</th>
              <th className="py-2 px-3">QR Code</th>
              <th className="py-2 px-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {stalls.map((stall) => (
              <tr key={stall.id} className="border-b border-gray-700">
                <td className="py-3 px-3">{stall.id}</td>
                <td className="py-3 px-3">{stall.name}</td>
                <td className="py-3 px-3">{stall.admin}</td>
                <td className="py-3 px-3">{stall.visitors[visitorFilter]}</td>
                <td className="py-3 px-3">
                  <QRCode value={stall.qrCode} size={50} />
                </td>
                <td className="py-3 px-3">
                  <div className="flex gap-2 flex-wrap">
                    <ActionButtons
                      stall={stall}
                      openEditStallModal={openEditStallModal}
                      setStallToDelete={setStallToDelete}
                      setIsDeleteModalOpen={setIsDeleteModalOpen}
                      handleViewMenu={handleViewMenu}
                      handleViewDetails={handleViewDetails} // 👈 pass here
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4 p-2">
        {stalls.map((stall) => (
          <div
            key={stall.id}
            className="bg-orange-800 rounded-xl p-4 text-white shadow-md"
          >
            <p>
              <span className="font-semibold">Hotel ID:</span> {stall.id}
            </p>
            <p>
              <span className="font-semibold">Name:</span> {stall.name}
            </p>
            <p>
              <span className="font-semibold">Admin:</span> {stall.admin}
            </p>
            <p>
              <span className="font-semibold">Visitors:</span>{" "}
              {stall.visitors[visitorFilter]}
            </p>
            <div className="my-3">
              <QRCode value={stall.qrCode} size={64} />
            </div>
            <div className="flex gap-2 flex-wrap mt-3">
              <ActionButtons
                stall={stall}
                openEditStallModal={openEditStallModal}
                setStallToDelete={setStallToDelete}
                setIsDeleteModalOpen={setIsDeleteModalOpen}
                handleViewMenu={handleViewMenu}
                handleViewDetails={handleViewDetails} // 👈 pass here
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const ActionButtons = ({
  stall,
  openEditStallModal,
  setStallToDelete,
  setIsDeleteModalOpen,
  handleViewMenu,
  handleViewDetails, // 👈 accept here
}) => (
  <>
    <button
      onClick={() => openEditStallModal(stall)}
      className="bg-yellow-400 text-orange-900 px-3 py-1 rounded-full hover:bg-yellow-300 transition cursor-pointer"
    >
      <FaEdit />
    </button>
    <button
      onClick={() => {
        setStallToDelete(stall.id);
        setIsDeleteModalOpen(true);
      }}
      className="bg-red-600 px-3 py-1 rounded-full hover:bg-red-500 text-white transition cursor-pointer"
    >
      <FaTrash />
    </button>
    <button
      onClick={() => handleViewMenu(stall.id)}
      className="bg-blue-700 px-3 py-1 rounded-full hover:bg-blue-500 text-white transition cursor-pointer"
    >
      <FaUtensils />
    </button>
    <button
      onClick={() => handleViewDetails(stall.id)} // 👈 navigation on click
      className="bg-white text-black px-3 py-1 rounded-full hover:bg-black hover:text-white transition cursor-pointer"
    >
      View Details
    </button>
  </>
);

export default StallsTable;
