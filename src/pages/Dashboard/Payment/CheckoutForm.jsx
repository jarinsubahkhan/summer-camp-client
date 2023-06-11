/*eslint-disable */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import './checkoutForm.css'

const CheckoutForm = ({selected, price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('');
const [clientSecret, setClientSecret] = useState('');
const [processing, setProcessing] = useState(false);
const [transactionId, setTransactionId] = useState('');

useEffect( () => {
if(price > 0){
    axiosSecure.post('/create-payment-intent', {price})
.then(res => {
    console.log(res.data.clientSecret)
    setClientSecret(res.data.clientSecret)
})
}
}, [price])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if(!stripe || !elements){
            return
        }

        const card = elements.getElement(CardElement);

        if(card === null){
            return
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card 
        })
        if(error){
            console.log('error', error)
            setCardError(error.message)
          
        }
        else{
setCardError('');

             console.log('payment method', paymentMethod)
        }
        setProcessing(true)


        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'anonymous',
                        name: user?.displayName || 'anonymous',
                    }, 
                }, 
            },
        );
if(confirmError){
    console.log(confirmError)
}
        console.log('payment intent',paymentIntent)
        setProcessing(false)
        if(paymentIntent.status === 'succeeded'){
            setTransactionId(paymentIntent.id);

            const payment = {email: user?.email, 
                transactionId: paymentIntent.id,
                 price,
                  quantity: selected.length, 
                  class: selected.map(select => select?.name),
                  selectedClass: selected.map(select => select?.selectedClassId),
                  status: 'pending',
                }
            axiosSecure.post('/payment', payment)
            .then(res => {
                console.log(res.data)
                if(res.data.insertedId){
                    alert('confirmed')
                }
            })
        }
    }


    return (
       <>
       <form className="mt-8" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
         <button className="btn mt-5" type="submit" disabled={!stripe}> 
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600">{cardError}</p>} 
      {transactionId && <p className="text-green-600">Transaction successful</p>}
       </>
    );
};

export default CheckoutForm;