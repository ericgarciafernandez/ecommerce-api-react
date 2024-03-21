import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

function Component() {
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER}/products/${id}`)
      .then((result) => result.json())
      .then((value) => setProduct(value));
  });

  return (
    <div>
      <Navbar />
      <div className="mt-6">
        <div className="w-5/6 mx-auto my-12 flex flex-wrap justify-center gap-6">
          {product
            ? product.map((el, index) => (
                <div className="w-full flex flex-wrap justify-center gap-x-24">
                  <img src={el.image} className="w-1/3 h-full" />
                  <div className="flex flex-wrap flex-col">
                    <h2 className="text-2xl font-bold">{el.name}</h2>
                    <p className="grow">{el.description}</p>
                    <span className="text-2xl font-bold">{el.price}€</span>
                  </div>
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}

export default Component;
