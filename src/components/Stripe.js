import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "./Checkout";

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUBLIC_KEY}`);

function Component() {
  const appearance = {
    theme: 'stripe',
  };
  return (
    <Elements options={appearance} stripe={stripePromise}>
      <Checkout />
    </Elements>
  );
}

export default Component;
