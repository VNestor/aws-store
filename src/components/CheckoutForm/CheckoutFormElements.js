import styled from "styled-components";

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 0;
`;

export const StripeSection = styled.div`
  margin-top: 2rem;
`;

export const SubmitBtn = styled.button`
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
