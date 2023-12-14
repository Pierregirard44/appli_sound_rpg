import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black">
      <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        <Link
          to="/all"
          class="border-b-2 border-transparent hover:text-white dark:hover:text-gray-200 hover:border-orange-500 mx-1.5 sm:mx-6"
        >
          Tous les sons
        </Link>

        <Link
          to="/ambiance"
          class="border-b-2 border-transparent hover:text-white dark:hover:text-gray-200 hover:border-orange-500 mx-1.5 sm:mx-6"
        >
          Ambiance
        </Link>

        <Link
          to="/armes"
          class="border-b-2 border-transparent hover:text-white dark:hover:text-gray-200 hover:border-orange-500 mx-1.5 sm:mx-6"
        >
          Armes
        </Link>

        <Link
          to="/magie"
          class="border-b-2 border-transparent hover:text-white dark:hover:text-gray-200 hover:border-orange-500 mx-1.5 sm:mx-6"
        >
          Magie
        </Link>

        <Link
          to="/animaux"
          class="border-b-2 border-transparent hover:text-white dark:hover:text-gray-200 hover:border-orange-500 mx-1.5 sm:mx-6"
        >
          Animaux
        </Link>
        <Link
          to="/humains"
          class="border-b-2 border-transparent hover:text-white dark:hover:text-gray-200 hover:border-orange-500 mx-1.5 sm:mx-6"
        >
          Humains
        </Link>
        <Link
          to="/monstres"
          class="border-b-2 border-transparent hover:text-white dark:hover:text-gray-200 hover:border-orange-500 mx-1.5 sm:mx-6"
        >
          Monstres
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
