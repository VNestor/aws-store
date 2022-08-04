import React from "react";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../components/CheckoutForm";
import { CheckoutWrapper, CheckoutH2 } from "./CheckoutElements";

const Checkout = () => {
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

  return (
    <CheckoutWrapper>
      <AmplifyAuthenticator>
        <Elements stripe={stripePromise}>
          <section>
            <CheckoutH2>Ready to Checkout?</CheckoutH2>
            <CheckoutForm />
          </section>
        </Elements>
      </AmplifyAuthenticator>
    </CheckoutWrapper>
  );
};

export default Checkout;
