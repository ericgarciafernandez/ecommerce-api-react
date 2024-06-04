import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "./Layout";
import useCartStore from "../store/cart";

function Component() {
  const [product, setProduct] = useState();
  const increaseCart = useCartStore((state) => state.increaseCart);
  const addProductCart = useCartStore((state) => state.addProductCart);
  const setTotalPrice = useCartStore((state) => state.setTotalPrice);
  const { id } = useParams();

  async function getProduct() {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/products/${id}`
      );
      const value = await response.json();
      setProduct(value);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  }

  function addProduct() {
    increaseCart();
    addProductCart(product);
    setTotalPrice(product[0].price);
  }

  useEffect(() => {
    getProduct();
  }, [id]);

  return (
    <Layout>
      <div className="container mx-auto mt-12 p-6">
        {product ? (
          product.map((el) => (
            <div
              key={el.id}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <div className="w-1/3 h-96 flex flex-wrap justify-center content-center mx-auto rounded-lg shadow-xl bg-white">
                <img src={el.image} alt={el.name} />
              </div>

              <div className="flex flex-col w-full md:w-1/3">
                <h2 className="text-3xl font-bold text-text mb-4">{el.name}</h2>
                <p className="text-text mb-6">{el.description}</p>
                <div className="flex items-center justify-start gap-x-12">
                  <span className="text-2xl font-bold text-primary">
                    {el.price}€
                  </span>
                  <button
                    onClick={addProduct}
                    className="text-sm rounded-lg bg-accent text-white px-5 py-2.5 text-center hover:bg-primary transition duration-300"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-text">Loading product...</p>
        )}
      </div>
    </Layout>
  );
}

export default Component;
