import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

function Component() {
  const stripe = useStripe();
  const elements = useElements();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log('clic en pagar');
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    })

    if (!error) {
      console.log(paymentMethod);
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
