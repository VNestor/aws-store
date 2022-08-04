import styled from "styled-components";

/* Cart Section */

export const CartSection = styled.section`
  width: 90%;
  margin: auto;
  text-align: center;
`;

export const CartH2 = styled.h2`
  margin: 3rem auto;
  font-size: clamp(3rem, 2.5vw, 4.8rem);
  text-align: center;
`;

export const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CartItem = styled.article`
  margin: 2rem 0rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  .image {
    flex: 1 1 10rem;
  }

  img {
    width: 10rem;
  }

  .details {
    flex: 2 1 10rem;
  }

  .amount {
    flex: 1 1 10rem;
  }
`;

export const ButtonSection = styled.div`
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
