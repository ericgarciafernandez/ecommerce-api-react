import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Product from "./Product";

function Component() {
  const [product, setProduct] = useState([]);
  const { category } = useParams();

  async function getCategory() {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER}/categorias/${category}`);
      const value = await response.json();
      setProduct(value);
    } catch (error) {
      console.log('Error fetching data', error);
    }
  }

  useEffect(() => {
    getCategory();
  }, [category]);

  return (
    <div>
      <Navbar />
      <p className="mt-6 text-2xl text-center font-bold uppercase">
        {category}
      </p>
      <div className="w-5/6 mx-auto my-12 flex flex-wrap justify-center gap-6">
        {product
          ? product.map((el, index) => (
            <Product
              key={el.id}
              id={el.id}
              name={el.name}
              price={el.price}
              image={el.image}
            />
          ))
          : ""}
      </div>
    </div>
  );
}

export default Component;
