import React from "react";
import { Link } from "react-router-dom";

export default function WeAreHiringImageBG() {
  const imageAndButton = () => {
    return (
      <div className="relative flex flex-col items-center md:w-11/12">
        <div>
          <img className="z-0" width="100%" src="/images/image-home.webp"></img>
        </div>
        <div>
          <Link to={"careers"}>
            <p className="absolute top-20 -translate-x-20 md:-translate-x-36 md:px-20 px-10 py-2 md:text-xl md:text-center text-white bg-red-600 hover:bg-blue-900 transition-colors duration-300">
              We are hiring!!
            </p>
          </Link>
        </div>
      </div>
    );
  };

  const findOutMoreButton = () => {
    return (
      <div>
        <Link to={"careers"}>
          <button className="md:px-6 md:py-4 px-2 py-1 bg-blue-900 text-white duration-300 hover:bg-red-600">
            +
          </button>
        </Link>
        <Link to={"careers"}>
          <button className="md:px-6 md:py-4 px-2 py-1 bg-red-600  text-white duration-300 hover:bg-blue-900">
            Find Out More
          </button>
        </Link>
      </div>
    );
  };

  const descriptionMain = () => {
    return (
      <div className="bg-stone-100 px-10 py-10 md:w-1/2">
        <p className="md:text-3xl font-semibold md:w-1/2 text-blue-900">
          ATEK-Consulting & Staffing Services
        </p>
        <div className="flex mt-10 md:mt-20">
          <div className="md:block hidden w-20 h-1 rounded mr-12 mt-2 bg-blue-900"></div>
          <p className="text-blue-500 md:w-1/2 m-0">
            ATEK is a Business and IT Services Organization that delivers
            Application and Business Process Services to help clients reduce
            costs, enhance organizational flexibility, and improve their
            business and IT performance.
          </p>
        </div>
      </div>
    );
  };

  const descriptionContainer = () => {
    return (
      <div className="md:relative md:bottom-36 md:right-16 flex flex-col items-end">
        {descriptionMain()}
        {findOutMoreButton()}
      </div>
    );
  };

  return (
    <div>
      {imageAndButton()}
      {descriptionContainer()}
    </div>
  );
}
