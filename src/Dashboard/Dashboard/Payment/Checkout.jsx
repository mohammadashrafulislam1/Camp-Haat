import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const Checkout = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (!card) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
    } else {
      setError("");
      console.log(paymentMethod);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <div className="mb-4">
        <label htmlFor="card-element" className="block font-medium text-gray-700 mb-2">
          Card Details
        </label>
        <CardElement
          id="card-element"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
          className="p-2 border border-gray-300 rounded"
        />
      </div>
      <button
        className="btn btn-primary btn-sm mt-6 px-4 py-2 w-full text-white font-semibold rounded"
        type="submit"
        disabled={!stripe}
      >
        Pay
      </button>
      {error && (
        <div className="bg-red-100 text-red-500 px-4 py-2 mt-4 rounded">
          {error}
        </div>
      )}
    </form>
  );
};

export default Checkout;
