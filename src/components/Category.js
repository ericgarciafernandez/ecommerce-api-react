import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

function Component() {
  const { category } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER}/categories/${category}`)
      .then((result) => result.json())
      .then((value) => setProduct(value));
  }, []);
  return (
    <div className="mt-6">
      <p className="text-2xl text-center uppercase">{category}</p>
      <div className="w-5/6 mx-auto my-12 flex flex-wrap justify-center gap-6">
        {product
          ? product.map((el, index) => (
              <Product
                key={index}
                name={el.name}
                description={el.description}
                price={el.price}
                stock={el.stock}
                image={el.image}
                category={el.category}
              />
            ))
          : ""}
      </div>
    </div>
  );
}

export default Component;
