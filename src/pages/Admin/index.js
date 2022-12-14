import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { API, graphqlOperation, Storage } from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { createBook } from "../../api/mutations";
import config from "../../aws-exports";
import {
  AdminSection,
  AdminHeader,
  FormWrapper,
  ImgDiv,
  FormFieldsDiv,
  SubmitFormDiv,
} from "./AdminElements";

const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket,
} = config;

const Admin = () => {
  const [image, setImage] = useState(null);
  const [bookDetails, setBookDetails] = useState({
    title: "",
    description: "",
    image: "",
    author: "",
    price: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!bookDetails.title || !bookDetails.price) return;
      await API.graphql(graphqlOperation(createBook, { input: bookDetails }));
      setBookDetails({
        title: "",
        description: "",
        image: "",
        author: "",
        price: "",
      });
    } catch (err) {
      console.log("Error submitting: ", err);
    }
  };

  const handleImageUpload = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const extension = file.name.split(".")[1];
    const name = file.name.split(".")[0];
    const key = `images/${uuidv4()}${name}.${extension}`;
    const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`;
    try {
      // Upload the file to s3 with public access
      await Storage.put(key, file, {
        level: "public",
        contentType: file.type,
      });
      // Retrieve the uploaded file to display
      const image = await Storage.get(key, { level: "public" });
      setImage(image);
      setBookDetails({ ...bookDetails, image: url });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AdminSection>
      <AmplifyAuthenticator>
        <section>
          <AdminHeader>
            <h3>Add a New Book</h3>
            <AmplifySignOut></AmplifySignOut>
          </AdminHeader>
          <FormWrapper onSubmit={handleSubmit}>
            <ImgDiv>
              {image ? (
                <img className="image-preview" src={image} alt="" />
              ) : (
                <input
                  type="file"
                  accept="image/jpg"
                  onChange={(e) => handleImageUpload(e)}
                />
              )}
            </ImgDiv>
            <FormFieldsDiv>
              <div className="title-form">
                <p>
                  <label htmlFor="title">Title</label>
                </p>
                <p>
                  <input
                    name="email"
                    type="title"
                    placeHolder="Type the title of the book."
                    onChange={(e) =>
                      setBookDetails({ ...bookDetails, title: e.target.value })
                    }
                    required
                  />
                </p>
              </div>
              <div className="description-form">
                <p>
                  <label htmlFor="description">Description</label>
                </p>
                <p>
                  <textarea
                    name="description"
                    type="text"
                    rows="8"
                    placeholder="Type the description of the book."
                    onChange={(e) =>
                      setBookDetails({
                        ...bookDetails,
                        description: e.target.value,
                      })
                    }
                    required
                  />
                </p>
              </div>
              <div className="author-form">
                <p>
                  <label htmlFor="author">Author</label>
                </p>
                <p>
                  <input
                    name="author"
                    type="text"
                    placeholder="Type the author's name."
                    onChange={(e) =>
                      setBookDetails({ ...bookDetails, author: e.target.value })
                    }
                    required
                  />
                </p>
              </div>
              <div className="price-form">
                <p>
                  <label htmlFor="price"> Price ($)</label>
                  <input
                    name="price"
                    type="text"
                    placeholder="Type the price of the book in USD."
                    onChange={(e) =>
                      setBookDetails({ ...bookDetails, price: e.target.value })
                    }
                    required
                  />
                </p>
              </div>
              <div className="featured-form">
                <p>
                  <label>Featured?</label>
                  <input
                    type="checkbox"
                    className="featured-checkbox"
                    checked={bookDetails.featured}
                    onChange={() =>
                      setBookDetails({
                        ...bookDetails,
                        featured: !bookDetails.featured,
                      })
                    }
                  />
                </p>
              </div>
              <SubmitFormDiv>
                <button type="submit">Submit</button>
              </SubmitFormDiv>
            </FormFieldsDiv>
          </FormWrapper>
        </section>
      </AmplifyAuthenticator>
    </AdminSection>
  );
};

export default Admin;
