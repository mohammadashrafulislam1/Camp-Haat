import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import Checkout from "./Checkout";
import { Elements } from "@stripe/react-stripe-js";

// TODO
const stripePromise = loadStripe(import.meta.env.VITE_PK_Key_Stripe)
const Payment = () => {
    return (
        <div>
        <SectionTitle heading="Pay Now" subHeading="Pay in a secure way" moto="PAY"></SectionTitle>

        <Elements stripe={stripePromise}>
        <Checkout></Checkout>
        </Elements>
        
        </div>
    );
};

export default Payment;