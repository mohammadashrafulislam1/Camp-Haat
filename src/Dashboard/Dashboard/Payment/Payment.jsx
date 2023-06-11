import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import Checkout from "./Checkout";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hock/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_PK_Key_Stripe);

const Payment = () => {
    const [mycarts] = useCart();
    const totalPrice = mycarts?.reduce(
      (accumulator, currentCart) => accumulator + currentCart.price,
      0
    );
    const price = totalPrice ? parseFloat(totalPrice.toFixed(2)) : 0;
  
    return (
        <div>
        <SectionTitle heading="Pay Now" subHeading="Pay in a secure way" moto="PAY"></SectionTitle>
        <Elements stripe={stripePromise}>
        <Checkout cart={mycarts} price={price}></Checkout>
        </Elements>
        
        </div>
    );
};

export default Payment;