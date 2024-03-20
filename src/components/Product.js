import { Card } from "flowbite-react";

function Component({ name, description, price, stock, image, category }) {
  return (
    <Card
      className="w-80 bg-secondary"
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc={image}
    >
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
      </a>
      <div className="flex items-center justify-between gap-x-12">
        <span className="text-xl font-bold text-gray-900 dark:text-white">
          {price}€
        </span>
        <a
          href="#"
          className="text-sm rounded-lg bg-accent px-5 py-2.5 text-center text-text "
        >
          Add to cart
        </a>
      </div>
    </Card>
  );
}

export default Component;
