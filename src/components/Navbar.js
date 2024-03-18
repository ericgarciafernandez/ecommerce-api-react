import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleDropDown = () => {
    setIsOpen(!isOpen);
  };
  const linkClass =
    "block py-2 px-3 text-gray-900 border-b-2 border-secondary hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700";
  return (
    <nav class="bg-background">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a
          href="https://flowbite.com"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/plant.svg" className="h-6" />
        </a>
        <button
          data-collapse-toggle="mega-menu-full-cta"
          type="button"
          class="bg-secondary inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-text rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="mega-menu-full-cta"
          aria-expanded="false"
          onClick={handleDropDown}
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          id="mega-menu-full-cta"
          class={`bg-background items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isOpen ? "block" : "hidden"
          } `}
        >
          <ul class="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
            <li>
              <a href="#" class={linkClass}>
                Interior
              </a>
            </li>
            <li>
              <a href="#" class={linkClass}>
                Exterior
              </a>
            </li>
            <li>
              <a href="#" class={linkClass}>
                Jardín
              </a>
            </li>
            <li>
              <a href="#" class={linkClass}>
                Hierbas
              </a>
            </li>
            <li>
              <a href="#" class={linkClass}>
                <img src="/busqueda.svg" className="h-6" />
              </a>
            </li>
            <li>
              <a href="#" class={linkClass}>
                <img src="/carrito.svg" className="h-6" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
