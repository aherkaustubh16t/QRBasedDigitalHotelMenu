import React from "react";
import AnimatedText from "../AnimatedText";

const Header = ({ stallName }) => {
  return (
    <>
      {/* Header 1 */}
      <div className="bg-orange-600 p-4 text-center font-bold text-3xl rounded-lg shadow-md mb-3">
        <AnimatedText prefix={"Scan"} words={["Eat", "It"]} />
      </div>

      {/* Header 2 */}
      <header className="bg-orange-400 p-4 rounded-lg shadow-md mb-2 text-center">
        <h1 className="text-2xl font-bold">
          {stallName} <br /> Admin Panel
        </h1>
      </header>
    </>
  );
};

export default Header;
