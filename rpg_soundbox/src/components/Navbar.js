const Navbar = () => {
  return (
    <nav className="bg-black">
      <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        <a
          href="#"
          class="border-b-2 border-transparent hover:text-white dark:hover:text-gray-200 hover:border-orange-500 mx-1.5 sm:mx-6"
        >
          Ambiance
        </a>

        <a
          href="#"
          class="border-b-2 border-transparent hover:text-white dark:hover:text-gray-200 hover:border-orange-500 mx-1.5 sm:mx-6"
        >
          Armes
        </a>

        <a
          href="#"
          class="border-b-2 border-transparent hover:text-white dark:hover:text-gray-200 hover:border-orange-500 mx-1.5 sm:mx-6"
        >
          Magie
        </a>

        <a
          href="#"
          class="border-b-2 border-transparent hover:text-white dark:hover:text-gray-200 hover:border-orange-500 mx-1.5 sm:mx-6"
        >
          Animaux
        </a>
        <a
          href="#"
          class="border-b-2 border-transparent hover:text-white dark:hover:text-gray-200 hover:border-orange-500 mx-1.5 sm:mx-6"
        >
          Humains
        </a>
        <a
          href="#"
          class="border-b-2 border-transparent hover:text-white dark:hover:text-gray-200 hover:border-orange-500 mx-1.5 sm:mx-6"
        >
          Monstres
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
