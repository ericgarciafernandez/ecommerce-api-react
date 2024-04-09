import { PaymentElement } from "@stripe/react-stripe-js";

function Component() {
  return (
    <form>
      <PaymentElement />
      <button>Submit</button>
    </form>
  );
}

export default Component;
