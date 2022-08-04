import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BookContext } from "../../context/books";
import { BooksSection, BookArticle, BookImageDiv } from "./BooksElements";

const Books = () => {
  const { books } = useContext(BookContext);

  if (!books.length) {
    return <h3>No Books Available For Purchase</h3>;
  }

  return (
    <BooksSection>
      {books.map(({ image: image, id, title }) => (
        <BookArticle key={id}>
          <BookImageDiv>
            <img src={image} alt={title} />
          </BookImageDiv>
          <Link to={`${id}`} className="btn book-link">
            Details
          </Link>
        </BookArticle>
      ))}
    </BooksSection>
  );
};

export default Books;
