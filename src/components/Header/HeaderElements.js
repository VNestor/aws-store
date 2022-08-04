import styled from "styled-components";

/* Nav Section */

export const HeaderSection = styled.header`
  background: #131c27;
  color: white;

  #logo {
    flex: 2 1 40rem;
    font-family: "Pattaya", sans-serif;
    font-weight: 400;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-height: 10vh;
  padding: 2rem;
  width: 90%;
  margin: auto;

  ul {
    display: flex;
    flex: 1 1 40rem;
    justify-content: space-around;
    align-items: center;
    list-style: none;
  }
`;
