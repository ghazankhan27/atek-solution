import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function HealthCareStaffing() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="mb-20">
      <div className="bg-blue-900 h-44 w-screen"></div>
      <div className="bg-stone-100 text-4xl md:text-7xl w-fit mx-auto relative -top-20 px-4 py-4 md:px-10 md:py-10 text-blue-900 shadow-lg">
        <p className="w-1/2">Healthcare Staffing</p>
      </div>
      <div className="md:w-1/2 mx-auto md:px-0 px-6">
        <p>
          ​Healthcare Staffing Finding You Quality Medical Professionals Why
          Work With a Healthcare Staffing
        </p>
        <div className="mt-10">
          <p>
            &#10003; Save time: You no longer need to read dozens and dozens of
            applications.
          </p>
          <p>
            &#10003; Marketing: They promote your openings via the web so you
            save on marketing costs.
          </p>
          <p>
            &#10003; Large Database: With a database full of quality candidates,
            we have the employees you need - especially beneficial when needs
            are urgent.
          </p>
          <p>
            &#10003; Benefits and pay: The company handles all pay and benefit
            responsibilities so you don't have to worry about these duties.
          </p>
          <p>
            &#10003; Training: Ongoing training ensures staff continues to gain
            knowledge in their field, ensuring your company has the most skilled
            personnel possible.
          </p>
        </div>

        <div className="mt-10">
          <p>Neef Staff?</p>
          <a
            className="text-blue-900 underline"
            href="mailto:info@ateksolutionservice.com"
          >
            info@ateksolutionservice.com
          </a>
        </div>

        <HashLink to={"/#ourservices"}>
          <p className="mt-20 text-red-600">Back</p>
        </HashLink>
      </div>
    </div>
  );
}
