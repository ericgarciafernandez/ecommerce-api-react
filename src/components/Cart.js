import React from "react";
import Layout from "./Layout";
import useCartStore from "../store/cart";

function Cart() {
  const cart = useCartStore((state) => state.cart);
  const totalPrice = useCartStore((state) => state.totalPrice);

  async function handleSubmit() {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/create-checkout-session`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cart),
        }
      );
      const value = await response.json();

      if (value.url) {
        window.location.href = value.url;
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
          <div className="w-full md:w-1/2 lg:w-1/3 h-3/6 overflow-y-auto p-4 bg-white rounded-lg shadow-lg">
            {cart.length > 0 ? (
              cart.map((el, index) => (
                <div
                  key={index}
                  className="flex gap-4 mb-6 p-4 bg-gray-100 rounded-lg"
                >
                  <img
                    src={el.image}
                    alt={el.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex flex-col justify-between">
                    <p className="text-lg font-semibold text-text">{el.name}</p>
                    <p className="text-text">Cantidad: {el.quantity}</p>
                    <p className="text-text">{el.price}€</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-text">Tu carrito está vacío</p>
            )}
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col justify-around items-center p-6 h-96 bg-white rounded-lg shadow-lg">
            <p className="text-xl font-semibold text-text mb-4">
              Precio total:{" "}
              <span className="font-bold text-primary">
                {parseFloat(totalPrice).toFixed(2)}€
              </span>
            </p>
            <p className="text-sm text-center text-gray-600">
              Al hacer clic en "Pagar", aceptas los términos de privacidad y
              seguridad de Stripe.
            </p>
            <div className="lg:mt-0 lg:col-span-5 flex flex-wrap justify-center">
              <img src="/credit_card.png" alt="mockup" className="h-auto"></img>
              <img
                src="/visa_electron.png"
                alt="mockup"
                className="h-auto"
              ></img>
              <img src="/maestro.png" alt="mockup" className="h-auto"></img>
              <img src="/cirrus.png" alt="mockup" className="h-auto"></img>
              <img
                src="/currency_dollar_sign.png"
                alt="mockup"
                className="h-auto"
              ></img>
            </div>
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

export default Cart;
