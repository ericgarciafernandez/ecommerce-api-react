import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

function Component() {
  const stripe = useStripe();
  const elements = useElements();

  async function handleSubmit(e) {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    })

    if (!error) {
      const { id } = paymentMethod;
      const settings = {
        method: 'POST',
        body: JSON.stringify({
          id,
          amount: 985
        }),
        headers: { "Content-Type": "application/json" }
      };
      try {
        const response = await fetch(`${process.env.REACT_APP_SERVER}/api/checkout`, settings);
        const value = await response.json();
        elements.getElement(CardElement).clear();
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button>Pagar</button>
    </form>
  );
}

export default Component;
