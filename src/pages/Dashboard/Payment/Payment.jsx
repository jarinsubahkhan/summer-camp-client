import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_payment);

const Payment = () => {
    return (
        <div>
       <h2 className="text-center text-2xl font-bold text-white">Payment for  joining a class</h2>
       <Elements stripe={stripePromise}>
       <CheckoutForm></CheckoutForm>   
        </Elements>   
        
        </div>
    );
};

export default Payment;