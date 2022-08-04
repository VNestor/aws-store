import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero";
import { BookContext } from "../../context/books";
import {
  FeaturedHeader,
  BookArticle,
  BookImageDiv,
  BooksSection,
} from "./HomeElements";

const Home = () => {
  const { featured } = useContext(BookContext);
  if (!featured.length) {
    return <h3>Currently There are No Featured Books</h3>;
  }

  return (
    <>
      <Hero />
      <section className="featured">
        <FeaturedHeader>
          <h3>Featured Collection</h3>
        </FeaturedHeader>
        <BooksSection className="featured-list">
          {featured.map(({ id, image, title }) => (
            <BookArticle key={id}>
              <BookImageDiv>
                <img src={image} alt={title} />
              </BookImageDiv>
              <Link to={`books/${id}`} className="btn book-link">
                Details
              </Link>
            </BookArticle>
          ))}
        </BooksSection>
      </section>
    </>
  );
};

export default Home;
