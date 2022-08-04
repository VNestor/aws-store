import styled from "styled-components";

/* Featured Section */

export const BooksSection = styled.section`
  padding: 2rem 10rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin: auto;
`;

export const FeaturedHeader = styled.header`
  background: #343c44;
  padding: 2rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BookArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1), 0px 20px 20px rgba(0, 0, 0, 0.1);
  height: 30rem;
  margin: 6rem 4rem;
  border-top: 1px solid #efefef;
  background: floralwhite;

  .featured-book {
    margin: 1rem 0;
  }

  .book-link {
    flex: 1 1 100rem;
    background: #55606c;
    font-size: 1.7rem;
    width: 100%;
    height: 100%;
  }

  .book-link:hover {
    background: #343c43;
  }

  img {
    min-height: 10vh;
    height: 21vh;
  }
`;

export const BookImageDiv = styled.div`
  flex: 3 1 100rem;
  padding: 2rem 0rem;
`;
