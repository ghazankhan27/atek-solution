import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function EngineeringSupport() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="mb-20">
      <div className="bg-blue-900 h-44 w-screen"></div>
      <div className="bg-stone-100 text-4xl md:text-7xl w-fit mx-auto relative -top-20 px-4 py-4 md:px-10 md:py-10 text-blue-900 shadow-lg">
        <p className="w-1/2">Engineering Support</p>
      </div>
      <div className="md:w-1/2 mx-auto md:px-0 px-6">
        <p>
          ATEK provides a wide range of engineering and design services. Our
          engineers apply innovative technologies and process improvements to
          provide end-to-end engineering solutions on time and on budget. From
          analytical design, verification and validation to product engineering
          and development, ATEK delivers world-class engineering services
          meeting the highest requirements.
        </p>

        <HashLink to={"/#ourservices"}>
          <p className="mt-20 text-red-600">Back</p>
        </HashLink>
      </div>
    </div>
  );
}
