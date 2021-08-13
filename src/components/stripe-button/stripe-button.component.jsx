import React from 'react'

import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JNtUhJjanpNStRiPIfQG3uCeBgkrnOPPsq0W61wCKQsQs7HBmpmUhYdRdV4ABK49Z35Sv8fjpITnvpHtme1tT0D006PhohWOI';

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful');
    }

    return(
        <StripeCheckout 
            label = 'Pay Now'
            name = 'Costanza NFTs'
            billingAddress
            shippingAddress
            image = 'https://svgshare.com/i/CV2.svg'
            description = {`Your total is $${price}.`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishableKey}
        />
    )
}

export default StripeCheckoutButton;