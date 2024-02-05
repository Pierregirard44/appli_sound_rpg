import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showSoundboxDropdown, setShowSoundboxDropdown] = useState(false);
  const [showCharacterSheetDropdown, setShowCharacterSheetDropdown] =
    useState(false);
  const [showLibraryDropdown, setShowLibraryDropdown] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  const showDropdownHandler = (dropdown) => {
    clearTimeout(dropdownTimeout); // Clear any existing timeout

    switch (dropdown) {
      case "soundbox":
        setShowSoundboxDropdown(true);
        break;
      case "characterSheet":
        setShowCharacterSheetDropdown(true);
        break;
      case "library":
        setShowLibraryDropdown(true);
        break;
      default:
        break;
    }
  };

  const hideDropdownHandler = (dropdown) => {
    // Set a timeout to hide the dropdown after a delay (e.g., 100 milliseconds)
    const timeout = setTimeout(() => {
      switch (dropdown) {
        case "soundbox":
          setShowSoundboxDropdown(false);
          break;
        case "characterSheet":
          setShowCharacterSheetDropdown(false);
          break;
        case "library":
          setShowLibraryDropdown(false);
          break;
        default:
          break;
      }
    }, 100);

    setDropdownTimeout(timeout);
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

        <div
          className="relative mx-1.5 sm:mx-6"
          onMouseEnter={() => showDropdownHandler("soundbox")}
          onMouseLeave={() => hideDropdownHandler("soundbox")}
        >
          <span className="cursor-pointer border-b-2 border-transparent hover:text-white dark:hover:text-gray-200 hover:border-orange-500 ml-4">
            Soundbox
          </span>
          {showSoundboxDropdown && (
            <div className="absolute bg-black text-gray-600 mt-1 p-2 rounded-md shadow-lg">
              <Link to="/homesoundbox" className="block hover:text-white ml-2">
                All sounds
              </Link>
              <Link to="/atmosphere" className="block hover:text-white ml-2">
                Atmosphere
              </Link>
              <Link to="/weapons" className="block hover:text-white ml-2">
                Weapons
              </Link>
              <Link to="/magic" className="block hover:text-white ml-2">
                Magic
              </Link>
              <Link to="/animals" className="block hover:text-white ml-2">
                Animal
              </Link>
              <Link to="/humans" className="block hover:text-white ml-2">
                Humans
              </Link>
              <Link to="/monsters" className="block hover:text-white ml-2">
                Monsters
              </Link>
            </div>
          )}
        </div>

        <div
          className="relative mx-1.5 sm:mx-6"
          onMouseEnter={() => showDropdownHandler("characterSheet")}
          onMouseLeave={() => hideDropdownHandler("characterSheet")}
        >
          <span className="cursor-pointer border-b-2 border-transparent hover:text-white dark:hover:text-gray-200 hover:border-orange-500 ml-4">
            Character sheet
          </span>
          {showCharacterSheetDropdown && (
            <div className="absolute bg-black text-gray-600 mt-1 p-2 rounded-md shadow-lg">
              {/* Contenu spécifique du dropdown pour Character Sheet */}
              {/* ... */}
            </div>
          )}
        </div>

        <div
          className="relative mx-1.5 sm:mx-6"
          onMouseEnter={() => showDropdownHandler("library")}
          onMouseLeave={() => hideDropdownHandler("library")}
        >
          <span className="cursor-pointer border-b-2 border-transparent hover:text-white dark:hover:text-gray-200 hover:border-orange-500 ml-4">
            Library
          </span>
          {showLibraryDropdown && (
            <div className="absolute bg-black text-gray-600 mt-1 p-2 rounded-md shadow-lg">
              {/* Contenu spécifique du dropdown pour Library */}
              {/* ... */}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
