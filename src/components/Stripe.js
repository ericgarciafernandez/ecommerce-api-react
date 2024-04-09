import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from "./Checkout";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(`${process.env.STRIPE_PUBLIC_KEY}`);

function Component() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: process.env.STRIPE_SECRET_KEY,
    mode: "payment",
    currency: "usd",
    amount: 1099,
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <Checkout />
    </Elements>
  );
}

export default Component;
