import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function FinancialServices() {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className="mb-20">
      <div className="bg-blue-900 h-44 w-screen"></div>
      <div className="bg-stone-100 text-4xl md:text-7xl w-fit mx-auto relative -top-20 px-4 py-4 md:px-10 md:py-10 text-blue-900 shadow-lg">
        <p className="w-1/2">Financial Services</p>
      </div>
      <div className="md:w-1/2 mx-auto md:px-0 px-6">
        <p>
          Our specialized recruiters connect our clients with a range of talent
          across the financial services industry. Atek flexible services help
          your business find the talent needed to navigate the evolving and
          highly-regulated financial market. Our skilled candidates range from
          mortgage originators and processors, banking specialists, corporate
          finance specialists, investment specialists and more. We partner with
          every client and each candidate to ensure that a placement is a mutual
          fit. If you're looking for top talent, below is a sample of skill sets
          we specialize in. If you don't see what you are looking for here,
          <a
            href={"mailto:info@ateksolutionservice.com"}
            className="text-blue-900 underline"
          >
            <span>{" " + "contact us "}</span>
          </a>
          today to learn more.
          <br></br>
        </p>
        <p className="mt-12 text-blue-900 text-xl md:text-2xl">
          Our Financial Services Expertise Includes
        </p>
        <ul className="list-disc list-inside">
          <li>Business Analysts</li>
          <li>Financial Analysts</li>
          <li>Loan Originators</li>
          <li>Loan Processors</li>
          <li>Mortgage Closer</li>
          <li>Mortgage Processor</li>
        </ul>

        <HashLink to={"/#ourservices"}>
          <p className="mt-20 text-red-600">Back</p>
        </HashLink>
      </div>
    </div>
  );
}
