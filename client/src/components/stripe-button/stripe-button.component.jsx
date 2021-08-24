import React from "react";

import axios from "axios";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JNtUhJjanpNStRiPIfQG3uCeBgkrnOPPsq0W61wCKQsQs7HBmpmUhYdRdV4ABK49Z35Sv8fjpITnvpHtme1tT0D006PhohWOI";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((res) => {
        alert("Payment Succesful!");
        console.log(res);
      })
      .catch((error) => {
        console.log("Payment error: " + JSON.parse(error));
        alert(
          "There was an issue with your payment and it failed. Please ensure you are using the test credit card listed on the checkout page."
        );
      });

    console.log(token);
    alert("Payment Succesful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Costanza NFTs"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CV2.svg"
      description={`Your total is $${price}.`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
