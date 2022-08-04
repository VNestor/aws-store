import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BookContext } from "../../context/books";
import { CartContext } from "../../context/cart";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { FormDiv, StripeSection, SubmitBtn } from "./CheckoutFormElements";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

const CheckoutForm = () => {
  const { cart, total, clearCart } = useContext(CartContext);
  const { checkout } = useContext(BookContext);
  const [orderDetails, setOrderDetails] = useState({
    cart,
    total,
    address: null,
    token: null,
  });
  const [error, setError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  useEffect(() => {
    if (orderDetails.token) {
      checkout(orderDetails);
    }
  }, [orderDetails]);

  // Handle real-time validation errors from the card Element.
  const handleChange = (event) => {
    if (event.error) {
      setError(event.error.message);
    } else {
      setError(null);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);
    if (result.error) {
      // Inform the use if an error occurred.
      setError(result.error.message);
    } else {
      setError(null);
      // Send token to server.
      const token = result.token;
      setOrderDetails({ ...orderDetails, token: token.id });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormDiv>
        <label htmlFor="checkout-address">Shipping Address</label>
        <input
          id="checkout-address"
          type="text"
          onChange={(e) =>
            setOrderDetails({ ...orderDetails, address: e.target.value })
          }
        />
        <StripeSection>
          <label htmlFor="stripe-element"> Credit or Debit Card</label>
          <CardElement
            id="stripe-element"
            options={CARD_ELEMENT_OPTIONS}
            onChange={handleChange}
          />
        </StripeSection>
        <div className="card-errors" role="alert">
          {error}
        </div>
      </FormDiv>
      <SubmitBtn type="submit">Submit Payment</SubmitBtn>
    </form>
  );
};

export default CheckoutForm;
