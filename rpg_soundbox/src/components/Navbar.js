import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="bg-black">
      <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        <Link
          to="/"
          className="border-b-2 border-transparent hover:text-white dark:hover:text-gray-200 hover:border-orange-500 mx-1.5 sm:mx-6"
        >
          Home
        </Link>

        <div className="relative mx-1.5 sm:mx-6">
          <span
            onClick={toggleDropdown}
            className="cursor-pointer border-b-2 border-transparent hover:text-white dark:hover:text-gray-200 hover:border-orange-500"
          >
            Soundbox
          </span>
          {showDropdown && (
            <div className="absolute bg-black text-gray-600 mt-1 p-2 rounded-md shadow-lg">
              <Link to="/homesoundbox" className="block hover:text-white">
                All sounds
              </Link>
              <Link to="/atmosphere" className="block hover:text-white">
                Atmosphere
              </Link>
              <Link to="/weapons" className="block hover:text-white">
                Weapons
              </Link>
              <Link to="/magic" className="block hover:text-white">
                Magic
              </Link>
              <Link to="/animals" className="block hover:text-white">
                Animal
              </Link>
              <Link to="/humans" className="block hover:text-white">
                Humans
              </Link>
              <Link to="/monsters" className="block hover:text-white">
                Monsters
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
