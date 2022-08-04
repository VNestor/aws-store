import React from "react";
import { FaRegSadCry } from "react-icons/fa";
import { ErrorH2 } from "./ErrorElements";

const Error = () => {
  return (
    <div>
      <ErrorH2>
        An Error Occurred!
        <br /> <FaRegSadCry size={70} />
      </ErrorH2>
    </div>
  );
};

export default Error;
