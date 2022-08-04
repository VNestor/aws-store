import React, { useContext } from "react";
import { CartContext } from "../../context/cart";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { FaRegSadCry } from "react-icons/fa";
import {
  CartSection,
  CartWrapper,
  CartItem,
  ButtonSection,
  CartH2,
} from "./CartElements";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, total, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  if (!cart.length) {
    return (
      <CartH2>
        Your Cart Is Empty <br /> <FaRegSadCry size={70} />
      </CartH2>
    );
  }

  return (
    <CartSection>
      <header>
        <CartH2>My Cart</CartH2>
      </header>
      <CartWrapper>
        {cart.map(({ id, title, price, image, amount }) => (
          <CartItem key={id}>
            <div className="image">
              <img src={image} alt="cart item" />
            </div>
            <div className="details">
              <p>{title}</p>
              <p>${price}</p>
            </div>
            <div className="amount">
              <button onClick={() => increaseAmount(id)}>
                <FiChevronUp />
              </button>
              <p>{amount}</p>
              <button onClick={() => decreaseAmount(id, amount)}>
                <FiChevronDown />
              </button>
            </div>
          </CartItem>
        ))}
      </CartWrapper>
      <div>
        <h3>Total: $ {total}</h3>
      </div>
      <ButtonSection>
        <button className="btn" onClick={() => navigate("/checkout")}>
          Checkout
        </button>
      </ButtonSection>
    </CartSection>
  );
};

export default Cart;
