
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hock/useAxiosSecure";
import useAuth from "../../../hock/useAuth";
import Swal from "sweetalert2";

const Checkout = ({ price, cart }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [paymentError, setPaymentError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (!card) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setPaymentError(error.message);
    } else {
      setPaymentError("");
    }
    setProcessing(true);
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "Unknown",
            name: user?.displayName || "Unknown",
          },
        },
      }
    );

    if (confirmError) {
      setPaymentError(confirmError.message);
    } else {
      setPaymentError("");
    }

    console.log(paymentIntent);
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      const transactionId = paymentIntent.id;
      setTransactionId(transactionId);

      const payment = {
        email: user.email,
        transactionId,
        price,
        date: new Date(),
        quantity: cart.length,
        cartItems: cart.map((i) => i._id),
        courseItems: cart.map((i) => i.courseItemId),
        status: 'Pending',
        itemNames: cart.map((i) => i.name),
      };
      axiosSecure.post("/payments", payment).then((res) => {
        console.log(res.data);
        if (res.data.insertResult.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Payment Successful`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
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
        disabled={!stripe || !clientSecret || processing}
      >
        Pay
      </button>
      {paymentError && (
        <div className="bg-red-100 text-red-500 px-4 py-2 mt-4 rounded">
          {paymentError}
        </div>
      )}
      {
        transactionId && (
          <div className="bg-green-100 text-green-500 px-4 py-2 mt-4 rounded">
           Completed Transaction with: {transactionId}
          </div>
        )
      }
    </form>
  );
};

export default Checkout;
