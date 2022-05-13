import React from "react";
import { HashLink } from "react-router-hash-link";

export default function HashLinkStyled({ path, label, func }) {
  return (
    <HashLink to={path}>
      <p
        onClick={func}
        className="text-right duration-300 hover:text-red-600 md:mx-4 text-blue-900 md:text-xl font-semibold"
      >
        {label}
      </p>
    </HashLink>
  );
}
