import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BookContext } from "../../context/books";
import { CartContext } from "../../context/cart";
import {
  BookDetailsSection,
  BookImageDiv,
  BookDescriptionDiv,
} from "./BookDetailsElements";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { books } = useContext(BookContext);
  const { addToCart } = useContext(CartContext);

  const book = books.find((book) => {
    return book.id === id;
  });
  if (!book) {
    return <h3>Loading...</h3>;
  }

  const { image: url, title, description, author, price } = book;

  return (
    <BookDetailsSection>
      <BookImageDiv>
        <img src={url} alt="10x Rule" />
      </BookImageDiv>
      <BookDescriptionDiv>
        <h2>{title}</h2>
        <p>{description}</p>
        <h3>{author}</h3>
        <h4>Price - ${price}</h4>
        <button
          className="btn"
          onClick={() => {
            addToCart({ ...book, id });
            navigate("/cart");
          }}
        >
          Add to Cart
        </button>
      </BookDescriptionDiv>
    </BookDetailsSection>
  );
};

export default BookDetails;
