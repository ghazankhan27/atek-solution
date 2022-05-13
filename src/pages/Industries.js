import React from "react";
import TitleWrapper from "../components/TitleWrapper";

export default function Industries() {
  return (
    <div>
      <TitleWrapper title={"Industries | Staffing & IT Service"}></TitleWrapper>
      <div>
        <img
          alt="industries home"
          className="md:w-10/12 industry-image"
          src="/images/industries.webp"
        ></img>
        <div className="bg-stone-100 text-3xl  md:text-7xl text-blue-900 mx-8 md:w-3/5 md:mx-auto bottom-12 relative shadow-md py-8 px-12">
          <p>IT Solutions for Your Industry</p>
        </div>
        <div
          id="something"
          className="space-y-36 text-2xl my-16 text-blue-900 pl-8 md:pl-80"
        >
          <p>Agriculture</p>
          <p>Banking & Financial Services</p>
          <p>Education</p>
          <p>Energy & Utilities</p>
          <p>Government</p>
        </div>
      </div>
    </div>
  );
}
