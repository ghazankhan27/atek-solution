import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";

export default function SupportConsulting() {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className="mb-20">
      <div className="bg-blue-900 h-44 w-screen"></div>
      <div className="bg-stone-100 text-4xl md:text-7xl w-fit mx-auto relative -top-20 px-4 py-4 md:px-10 md:py-10 text-blue-900 shadow-lg">
        <p className="w-1/2">Support Consulting</p>
      </div>
      <div className="md:w-1/2 mx-auto md:px-0 px-6">
        <p>
          Support Consulting ATEK has successfully placed candidates at all
          levels in a variety of companies. We deliver the talent our clients
          need, when they need it, at the rate they need us to work with.
          Partnering up with Onboard Inc, our clients are guaranteed Quality
          Candidates faster, at Competitive Rates enabling them to meet their
          commitments.<br></br>
          <br></br> Our goal is to connect you to exceptional IT Specialists and
          Business Intelligence Experts who have superior technical and
          mathematical aptitudes to implement your hardware and software
          applications, solve computer problems, and can train others computer
          system networks. Resource Logistics professionals were diligently
          screened to meet our high standards to work in places that are
          dependent on information technology. Our IT Staffing Service options
          include temporary, temp-to-hire, direct placement, consulting, and
          project management in the following areas:
        </p>
        <br></br>
        <ul className="list-disc list-inside">
          <li>Website Development</li>
          <li>Database Design, Development and Administration</li>
          <li>Server-Side Programming</li>
          <li>Network Engineering and Administration</li>
          <li>System Analysis</li>
          <li>Project Management and Administration</li>
          <li>Technical Writing</li>
          <li>Civil, Mechanical Engineer Positions. </li>
          <li>Client Management.</li>
          <li>Tax Manager All Positions.</li>
        </ul>
        <HashLink to={"/#ourservices"}>
          <p className="mt-20 text-red-600">Back</p>
        </HashLink>
      </div>
    </div>
  );
}
