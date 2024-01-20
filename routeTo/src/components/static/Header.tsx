import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Your Logo</div>
        <div>
          <button className="bg-white text-blue-500 px-4 py-2 rounded-full mr-4">
            Sign In
          </button>
          <button className="bg-white text-blue-500 px-4 py-2 rounded-full">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
