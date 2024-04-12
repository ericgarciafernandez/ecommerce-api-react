import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

function Component({ id, name, price, image }) {
  return (
    <Link to={`/detalles/${id}`}>
      <Card
        className="w-80 bg-secondary"
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc={image}
      >
        <h5 className="font-semibold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <div className="flex items-center justify-between gap-x-12">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            {price}€
          </span>
          <button className="text-sm rounded-lg bg-accent px-5 py-2.5 text-center text-text">
            Ver producto
          </button>
        </div>
      </Card>
    </Link>
  );
}

export default Component;
