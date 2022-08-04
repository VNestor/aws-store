import React from "react";
import { Link } from "react-router-dom";
import { HeaderSection, HeaderNav } from "./HeaderElements";

const Header = () => {
  return (
    <HeaderSection>
      <HeaderNav>
        <h1 id="logo">Victor&#x27;s Bookstore</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
        </ul>
      </HeaderNav>
    </HeaderSection>
  );
};

export default Header;
