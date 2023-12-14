// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black">
      <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        <link
          to="/ambiance"
          class="border-b-2 border-transparent hover:text-white dark:hover:text-gray-200 hover:border-orange-500 mx-1.5 sm:mx-6"
        >
          Ambiance
        </link>

        <link
          to="/armes"
          class="border-b-2 border-transparent hover:text-white dark:hover:text-gray-200 hover:border-orange-500 mx-1.5 sm:mx-6"
        >
          Armes
        </link>

        <link
          to="/magie"
          class="border-b-2 border-transparent hover:text-white dark:hover:text-gray-200 hover:border-orange-500 mx-1.5 sm:mx-6"
        >
          Magie
        </link>

        <link
          to="/animaux"
          class="border-b-2 border-transparent hover:text-white dark:hover:text-gray-200 hover:border-orange-500 mx-1.5 sm:mx-6"
        >
          Animaux
        </link>
        <link
          to="/humains"
          class="border-b-2 border-transparent hover:text-white dark:hover:text-gray-200 hover:border-orange-500 mx-1.5 sm:mx-6"
        >
          Humains
        </link>
        <link
          to=""
          class="border-b-2 border-transparent hover:text-white dark:hover:text-gray-200 hover:border-orange-500 mx-1.5 sm:mx-6"
        >
          Monstres
        </link>
      </div>
    </nav>
  );
};
export default Navbar;
