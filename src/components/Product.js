import { Link } from "react-router-dom";

function Component({ id, name, price, image }) {
  return (
    <Link
      to={`/detalles/${id}`}
      className="block w-96 transform transition duration-300 hover:scale-105"
    >
      <div className="bg-white flex flex-wrap justify-center content-center rounded-2xl h-96 shadow-xl">
        <img src={image} alt={name} className="bg-white h-64" />
      </div>

      <div className="p-4 flex flex-wrap justify-center">
        <h5 className="w-full text-lg text-center font-semibold text-gray-900 mb-2">
          {name}
        </h5>
        <button className="rounded-lg bg-accent text-white px-5 py-2.5 text-center transition duration-300">
          Detalles
        </button>
      </div>
    </Link>
  );
}

export default Component;
