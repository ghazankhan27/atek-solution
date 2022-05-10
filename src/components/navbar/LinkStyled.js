import React from "react";
import { Link } from "react-router-dom";

export default function LinkStyled({ path, label, func }) {
  return (
    <Link to={path}>
      <p
        onClick={func}
        className="text-right duration-300 hover:text-red-600 md:mx-4 text-blue-900 md:text-xl font-semibold"
      >
        {label}
      </p>
    </Link>
  );
}
