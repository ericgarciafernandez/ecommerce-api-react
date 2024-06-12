import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "./Layout";
import useCartStore from "../store/cart";

function Details() {
  const [product, setProduct] = useState(null);
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

  function addProductToCart() {
    if (product) {
      increaseCart();
      addProductCart(product[0]);
      setTotalPrice(product[0].price);
    }
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
              <div className="w-full md:w-1/3 h-96 flex items-center justify-center mx-auto rounded-lg shadow-xl bg-white">
                <img
                  src={el.image}
                  alt={el.name}
                  className="max-h-full max-w-full"
                />
              </div>

              <div className="flex flex-col w-full md:w-2/3">
                <h2 className="text-3xl font-bold text-text mb-4">{el.name}</h2>
                <p className="text-text mb-6">{el.description}</p>
                <div className="flex items-center justify-between gap-4 md:gap-12">
                  <span className="text-2xl font-bold text-primary">
                    {el.price}€
                  </span>
                  <button
                    onClick={addProductToCart}
                    className="text-sm rounded-lg bg-accent text-white px-5 py-2.5 text-center hover:bg-primary transition duration-300"
                  >
                    Añadir al carrito
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

export default Details;
