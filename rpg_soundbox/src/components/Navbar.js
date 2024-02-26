import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../fonts/GoudyBookletter1911.otf";
import logo from "../images/logo_golden.png";
import triangle from "../images/triangle.png";

const Navbar = () => {
  const [showSoundboxDropdown, setShowSoundboxDropdown] = useState(false);
  const [showCharacterSheetDropdown, setShowCharacterSheetDropdown] =
    useState(false);
  const [showLibraryDropdown, setShowLibraryDropdown] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    }, 50);

    setDropdownTimeout(timeout);
  };

  return (
    <nav>
      <div id="bigScreen" className="hidden lg:block">
        <div
          id="navbar"
          className="container flex items-center justify-center p-1 mx-auto capitalize dark:text-amber-500 font-family:Goudy"
        >
          {/* Créez une div pour le logo avec une classe spécifique */}
          <div className="logo-container flex items-center">
            <img src={logo} alt="Logo" className="h-16 w-16" />
            <div
              id="title"
              className="ml-4 container flex items-center justify-center p-2 capitalize dark:text-amber-500 font-family:Goudy"
            >
              RPG Soundbox
            </div>
          </div>

          <Link
            to="/"
            className="border-b-2 border-transparent hover:border-orange-500 mx-1.5 sm:mx-6"
          >
            Home
          </Link>

          <div
            className="relative mx-1.5 sm:mx-6"
            onMouseEnter={() => showDropdownHandler("soundbox")}
            onMouseLeave={() => hideDropdownHandler("soundbox")}
          >
            <span className="cursor-pointer border-b-2 border-transparent hover:border-orange-500 ml-4">
              Soundbox{" "}
              <img src={triangle} alt="triangle" className="h-3 w-3 inline" />
            </span>
            {showSoundboxDropdown && (
              <div className="absolute  bg-red-900 dark:text-amber-500 mt-1 p-2 rounded-md shadow-lg">
                <Link
                  to="/homesoundbox"
                  className="block hover:text-white ml-2"
                >
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
            <span className="cursor-pointer border-b-2 border-transparent   hover:border-orange-500 ml-4">
              Character sheet{" "}
              <img src={triangle} alt="triangle" className="h-3 w-3 inline" />
            </span>
            {showCharacterSheetDropdown && (
              <div className="absolute  bg-red-900 dark:text-amber-500 mt-1 p-2 rounded-md shadow-lg">
                <Link to="/WIP" className="block hover:text-white ml-2">
                  New character
                </Link>
                <Link to="/WIP" className="block hover:text-white ml-2">
                  Character list
                </Link>
              </div>
            )}
          </div>

          <div
            className="relative mx-1.5 sm:mx-6"
            onMouseEnter={() => showDropdownHandler("library")}
            onMouseLeave={() => hideDropdownHandler("library")}
          >
            <span className="cursor-pointer border-b-2 border-transparent   hover:border-orange-500 ml-4">
              Library{" "}
              <img src={triangle} alt="triangle" className="h-3 w-3 inline" />
            </span>
            {showLibraryDropdown && (
              <div className="absolute  bg-red-900 dark:text-amber-500 mt-1 p-2 rounded-md shadow-lg">
                <Link to="/WIP" className="block hover:text-white ml-2">
                  Spells
                </Link>
                <Link to="/WIP" className="block hover:text-white ml-2">
                  Items
                </Link>
                <Link to="/WIP" className="block hover:text-white ml-2">
                  Monsters
                </Link>
                <Link to="/WIP" className="block hover:text-white ml-2">
                  Weapons
                </Link>
                <Link to="/WIP" className="block hover:text-white ml-2">
                  Armors
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <div id="smallScreen" className="lg:hidden">
        <div
          id="navbar"
          className="container flex items-center justify-between p-1 mx-auto capitalize dark:text-amber-500 font-family:Goudy"
        >
          <div className="logo-container flex items-center">
            <img src={logo} alt="Logo" className="h-16 w-16" />
            <div
              id="title"
              className="ml-4 container flex items-center justify-center p-2 capitalize dark:text-amber-500 font-family:Goudy"
            >
              RPG Soundbox
            </div>
          </div>

          {/* Bouton Burger */}
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="text-amber-500 cursor-pointer focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>

          {/* Menu */}
          {isMenuOpen && (
            <div className="fixed top-0 right-0 w-50 h-full flex items-center justify-end">
              {/* Ajoute ici tes éléments de menu */}
              <ul id="burgerlist">
                <li className="py-2">
                  <Link to="/" className="hover:text-orange-500">
                    Home
                  </Link>
                </li>
                <hr className="w-32 h-0.2 bg-orange-500" />
                <li className="py-2 relative">
                  <button
                    id="soundBoxBurger"
                    onClick={() => setIsOpen(!isOpen)}
                    className="hover:text-orange-500"
                  >
                    SoundBox
                    <img
                      src={triangle}
                      alt="triangle"
                      className="h-3 w-3 inline"
                    />
                  </button>
                  {isOpen && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        <Link to="/homesoundbox" className="block ">
                          All sounds
                        </Link>
                        <Link to="/atmosphere" className="block ">
                          Atmosphere
                        </Link>
                        <Link to="/weapons" className="block ">
                          Weapons
                        </Link>
                        <Link to="/magic" className="block ">
                          Magic
                        </Link>
                        <Link to="/animals" className="block ">
                          Animal
                        </Link>
                        <Link to="/humans" className="block ">
                          Humans
                        </Link>
                        <Link to="/monsters" className="block">
                          Monsters
                        </Link>
                      </div>
                    </div>
                  )}
                </li>
                <hr className="w-32 h-0.2 bg-orange-500" />
                <li className="py-2">
                  <Link to="/WIP" className="hover:text-orange-500">
                    Character Sheet
                    <img
                      src={triangle}
                      alt="triangle"
                      className="h-3 w-3 inline"
                    />
                  </Link>
                </li>
                <hr className="w-32 h-0.2 bg-orange-500" />
                <li className="py-2">
                  <Link to="/WIP" className="hover:text-orange-500">
                    Library
                    <img
                      src={triangle}
                      alt="triangle"
                      className="h-3 w-3 inline"
                    />
                  </Link>
                </li>
                {/* Ajoute d'autres liens ici en suivant le même format */}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
