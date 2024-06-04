import React from "react";
import Layout from "./Layout";
import useCartStore from "../store/cart";

function Component() {
  const cart = useCartStore((state) => state.cart);
  const totalPrice = useCartStore((state) => state.totalPrice);

  console.log(totalPrice);
  console.log(cart);

  async function handleSubmit() {
    console.log("click");
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/create-checkout-session`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Indicamos que el contenido es JSON
          },
          body: JSON.stringify(cart), // Enviamos el carrito como JSON
        }
      );
      const value = await response.json();

      if (value.url) {
        window.location.href = value.url; // Redirigir a la URL proporcionada
      }
    } catch (error) {
      console.log("Error fetching data", error);
    }
  }

  return (
    <Layout>
      <div className="container mx-auto mt-10 p-6">
        <h1 className="text-3xl font-bold text-text text-center mb-8">
          Mi carrito
        </h1>
        <div className="flex flex-col justify-center md:flex-row gap-8">
          <div className="w-full md:w-1/3">
            {cart.map((el, index) => (
              <div key={index} className="flex gap-4 mb-6 p-4">
                <img
                  src={el.image}
                  alt={el.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex flex-col justify-between">
                  <p className="text-lg font-semibold text-text">{el.name}</p>
                  <p className="text-text">{el.price}€</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/3 flex flex-col flex-wrap content-center items-center p-6 rounded-lg shadow-md h-96">
            <p className="text-xl font-semibold text-text mb-4">
              Precio total:{" "}
              <span className="font-bold text-primary">
                {totalPrice.toFixed(2)}€
              </span>
            </p>
            <button
              className="w-full bg-primary text-white py-3 rounded-lg hover:bg-accent transition duration-300"
              onClick={handleSubmit}
            >
              Pagar
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Component;
