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
      <p className="text-2xl w-full text-center">Mi carrito</p>
      <div className="mt-6 flex">
        <div className="w-1/2 mx-auto  flex flex-wrap  gap-6">
          <div>
            {cart.map((el, index) => (
              <div key={index} className="flex gap-6 mt-6 justify-start">
                <img src={el.image} className="w-40 h-40" />
                <div className="flex flex-col justify-between">
                  <p> {el.name}</p>
                  <p> {el.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/2">
          <p>
            Precio total: <span className="font-bold">{totalPrice}€</span>
          </p>
          <button
            className="rounded-xl p-3 mt-2 bg-accent max-w-max"
            onClick={handleSubmit}
          >
            Pagar
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Component;
