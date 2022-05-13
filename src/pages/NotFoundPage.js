import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col px-8 text-center">
      <p>Sorry, the page you were looking for is not available.</p>
      <Link className="text-blue-600" to={"/"}>
        Return to the Home Page?
      </Link>
    </div>
  );
}
