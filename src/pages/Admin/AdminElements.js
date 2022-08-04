import styled from "styled-components";

/* Admin Section */

export const AdminSection = styled.section`
  width: 70%;
  margin: auto;
  text-align: center;
`;

export const AdminHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 3rem 0;

  h3 {
    font-size: 3rem;
    font-weight: 400;
  }

  @media only screen and (max-width: 800px) {
    display: block;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border: 1px #c7c7c7 solid;
  padding: 2rem;

  .title-form,
  .description-form,
  .author-form,
  .price-form,
  .submit-form,
  .featured-form {
    padding: 0.7rem;
  }

  label {
    margin: 0rem 2rem;
    text-align: left;
  }
`;

export const ImgDiv = styled.div`
  flex: 1 1 50rem;

  .image-preview {
    width: 35rem;
  }
`;

export const FormFieldsDiv = styled.div`
  flex: 3 1 50rem;
  text-align: left;

  input {
    width: 100%;
    height: 4rem;
    font-size: 2rem;
  }

  textarea {
    width: 100%;
    font-size: 2rem;
  }

  .featured-checkbox {
    width: 2rem;
    position: relative;
    top: 1.4rem;
  }
`;

export const SubmitFormDiv = styled.div`
  width: 100%;
  margin-left: 40%;

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

  @media only screen and (max-width: 800px) {
    margin: auto;
  }
`;
