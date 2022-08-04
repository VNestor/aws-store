import styled from "styled-components";

/* Book Details Section */

export const BookDetailsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 3rem 3rem auto;
  height: 80vh;
  text-align: center;
`;

export const BookImageDiv = styled.div`
  text-align: center;
  margin: auto 5rem;

  img {
    min-height: 15vh;
    height: 35vh;
  }
`;

export const BookDescriptionDiv = styled.div`
  display: block;
  flex: 1 1 50rem;
  flex-direction: column;
  justify-content: space-evenly;
  height: 75%;
  padding: 0 5rem;

  h2 {
    padding: 2rem;
  }
  p {
    padding: 2rem;
  }

  button {
    padding: 2rem 6rem;
    background: #4c6e97;
    border: none;
    color: white;
    font-size: 2rem;
    text-transform: uppercase;

    &:hover {
      background: #121c27;
    }
  }
`;
