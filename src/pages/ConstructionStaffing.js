import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";

export default function ConstructionStaffing() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="mb-20">
      <div className="bg-blue-900 h-44 w-screen"></div>
      <div className="bg-stone-100 text-4xl md:text-7xl w-fit mx-auto relative -top-20 px-4 py-4 md:px-10 md:py-10 text-blue-900 shadow-lg">
        <p className="w-1/2">Construction Staffing</p>
      </div>
      <div className="md:w-1/2 mx-auto md:px-0 px-6">
        <p>
          Construction Staffing Our specialized recruiters connect our clients
          with a range of talent across the construction industry. ATek flexible
          services help find the talent needed for all phases of your projects
          from concept to completion. Our skilled candidates range from
          engineering, design, construction management, craft labor
          professionals and more. We partner with every client and each
          candidate to ensure that a placement is a mutual fit.
        </p>
        <p className="mt-6">
          If you're looking for top talent, below is a sample of skill sets we
          specialize in. If you don't see what you are looking for here,
          <span className="underline text-blue-900">
            <a href="mailto:info@ateksolutionservice.com">
              {" " + "contact us" + " "}
            </a>
          </span>
          today to learn more.
        </p>
        <div className="mt-10">
          <p className="text-2xl text-blue-900">
            Our Construction Expertise Includes
          </p>
          <ul className="list-disc list-inside">
            <li>Carpenters</li>
            <li>Concrete Technicians</li>
            <li>Estimators</li>
            <li>Foremen</li>
            <li>Heavy Equipment Operators</li>
            <li>Inspectors</li>
            <li>Painters</li>
            <li>Project</li>
            <li>Engineers</li>
            <li>Schedulers</li>
            <li>Superintendents</li>
            <li>Welders</li>
          </ul>

          <p className="text-xl text-red-600 mt-6">Active Positions</p>
          <ol className="list-decimal list-inside">
            <li>ELECTRICAL DEPARTMENT MANAGER - CHARLOTTE</li>
            <li>SENIOR ELECTRICAL ENGINEER - CHARLOTTE</li>
            <li>ELECTRICAL E.I.T. - CHARLOTTE</li>
            <li>ELECTRICAL DEPARTMENT MANAGER - JACKSONVILLE</li>
            <li>SENIOR STRUCTURAL ENGINEER - JACKSONVILLE</li>
            <li>PLUMBING DESIGNER - ATLANTA</li>
          </ol>

          <p className="mt-6">For more Information:</p>
          <a
            className="text-blue-600 underline"
            href="mailto:info@ateksolutionservice.com"
          >
            ateksolutionservice.com
          </a>
        </div>

        <HashLink to={"/#ourservices"}>
          <p className="mt-20 text-red-600">Back</p>
        </HashLink>
      </div>
    </div>
  );
}
