import React from "react";
import { Link } from "react-router-dom";

const Button = ({ title, slug, classes }) => {
  return (
    <button className={`${classes}`}>
      <Link
        to={`/${slug}`}
        className="h-full w-full flex justify-center items-center"
      >
        {title}
      </Link>
    </button>
  );
};

export default Button;
