import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

function Component({ id, name, price, image }) {
  return (
    <Link to={`/detalles/${id}`} className="block w-full">
      <div className="bg-secondary rounded-md shadow-md overflow-hidden transition duration-300 transform hover:scale-105">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h5 className="text-lg font-semibold text-gray-900 mb-2">{name}</h5>
          <p className="text-text">{price}€</p>
        </div>
      </div>
    </Link>
  );
}

export default Component;
