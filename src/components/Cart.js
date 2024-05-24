import Layout from "./Layout";
import useCartStore from "../store/cart";

function Component() {
  const cart = useCartStore((state) => state.cart);
  const totalPrice = useCartStore((state) => state.totalPrice);
  console.log(totalPrice);
  console.log(cart);

  async function handleSubmit() {
    console.log('click');
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/create-checkout-session`, {
        method: 'POST'
      }
      );
      const value = await response.json();
      console.log(value);
      if (value.url) {
        window.location.href = value.url; // Redirigir a la URL proporcionada
      }
    } catch (error) {
      console.log("Error fetching data", error);
    }
  }

  return (
    <Layout>
      <div className="mt-6">
        <div className="w-5/6 mx-auto my-12 flex flex-wrap justify-center gap-6">
          <p className="text-2xl w-full text-center">Mi carrito</p>
          <div>
            {cart.map((el, index) => (
              <div key={index} className="flex gap-6 mt-6 justify-start">
                <img src={el.image} />
                <div className="flex flex-col justify-between">
                  <p> {el.name}</p>
                  <p> {el.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex flex-col">
            <p>
              Precio total: <span className="font-bold">{totalPrice}€</span>
            </p>
            <span className="border-2 p-2 mt-2 bg-accent max-w-max" onClick={handleSubmit}>Pagar</span>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Component;
