import React from "react";

export default function Home() {
  return (
    <div className="relative">
      <div className="relative flex justify-center items-center md:items-start md:w-11/12">
        <img width="100%" src="/images/image-home.webp"></img>
        <div className="absolute hover:cursor-pointer md:top-16 px-10 md:px-20 py-2 text-white bg-red-600 hover:bg-blue-900 duration-300">
          <p>We are hiring!!</p>
        </div>
      </div>
      <div className="absolute bg-stone-100 px-10 py-10 md:top-3/4 md:w-1/2 md:right-16">
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
    </div>
  );
}
