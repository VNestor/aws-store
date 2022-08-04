import styled from "styled-components";
import HeroBg from "../../assets/background.jpg";

/* Hero Section */

export const HeroSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.5), transparent), url(${HeroBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 43vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const HeroH2 = styled.h2`
  font-size: 4.8rem;
`;

export const HeroBtn = styled.button`
  padding: 2rem 6rem;
  background: #4c6e97;
  border: none;
  color: white;
  font-size: 2rem;
  text-transform: uppercase;

  &:hover {
    background: #121c27;
  }
`;

//   .hero .wrapper {
//     width: 90%;
//     margin: auto;
//   }
