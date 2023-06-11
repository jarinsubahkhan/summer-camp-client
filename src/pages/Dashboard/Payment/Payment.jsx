import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useSelected from "../../../hooks/useSelected";

const stripePromise = loadStripe(import.meta.env.VITE_payment);

const Payment = () => {
    const [selected] = useSelected();

const total = selected.find((item) => item.price)
const price = parseFloat(total?.price)

console.log(price)
    return (
        <div>
       <h2 className="text-center text-2xl font-bold text-white">Payment for  joining a class</h2>
       <Elements stripe={stripePromise}>
       <CheckoutForm selected={selected} price={price}></CheckoutForm>   
        </Elements>   
        
        </div>
    );
};

export default Payment;