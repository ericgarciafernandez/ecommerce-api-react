import { useState } from "react";
import { Link } from "react-router-dom";
import useCartStore from "../store/cart";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const countCart = useCartStore((state) => state.countCart);

  const handleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const linkClass =
    "block py-2 px-3 text-gray-900 border-b-2 border-secondary md:border-0";

  return (
    <nav className="bg-background">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <Link
          to={"/"}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/plant.svg" className="h-6" alt="Logo" />
        </Link>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-text rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="mega-menu-full-cta"
          aria-expanded="false"
          onClick={handleDropDown}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          id="mega-menu-full-cta"
          className={`w-full md:flex md:w-auto md:order-1 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
            <li>
              <Link to={"/categorias/interior"} className={linkClass}>
                Interior
              </Link>
            </li>
            <li>
              <Link to={"/categorias/exterior"} className={linkClass}>
                Exterior
              </Link>
            </li>
            <li>
              <Link to={"/categorias/jardin"} className={linkClass}>
                Jardín
              </Link>
            </li>
            <li>
              <Link to={"/categorias/hierbas"} className={linkClass}>
                Hierbas
              </Link>
            </li>
            <li className="relative">
              <Link to={"/carrito"} className={linkClass}>
                <img src="/carrito.svg" className="h-6" alt="Carrito" />
                {countCart > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                    {countCart}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
