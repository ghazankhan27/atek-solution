import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function CloudSolutions() {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className="mb-20">
      <div className="bg-blue-900 h-44 w-screen"></div>
      <div className="bg-stone-100 text-4xl md:text-7xl w-fit mx-auto relative -top-20 px-4 py-4 md:px-10 md:py-10 text-blue-900 shadow-lg">
        <p className="w-1/2">Cloud Solutions</p>
      </div>
      <div className="md:w-1/2 mx-auto md:px-0 px-6">
        <p>
          ATEK can help, moving your business-critical workloads to the cloud in
          as little as 30 days. With our proven cloud acceleration methodology,
          proprietary tools and industry expertise.<br></br>
        </p>
        <ul className="list-disc list-inside">
          <li>Minimize business disruption, migrating from weeks to days.</li>
          <li>
            Lessen customer impact in days with a cloud-based contact center.
          </li>
          <li>
            Improve business resilience, assessing cloud readiness in hours.
          </li>
          <li>Reduce tooling costs with our cloud management platform.</li>
        </ul>
        <br></br>
        <p>
          Migrate your systems to the cloud in 10 days • Desktop as a Service
          (DaaS) on cloud with AWS WorkSpaces: AWS WorkSpaces is a scalable,
          secure, managed DaaS solution built on AWS cloud to provision Windows
          and Linux desktops to enable employees to work from anywhere, anytime
          and on any device. ATEK can help you set up 100 workspaces in 10 days.
          • Virtual call center on cloud: ATEK virtual contact center leverages
          cloud, advanced artificial intelligence and cognitive capabilities to
          digitize our clients’ contact centers and deliver a seamless
          experience across multiple support channels. With a virtual call
          center, you can support your clients from anywhere and at any time.
          ATEK can help you set up a cloud contact center for up to 200 agents
          in 10 days
        </p>
        <HashLink to={"/#ourservices"}>
          <p className="mt-20 text-red-600">Back</p>
        </HashLink>
      </div>
    </div>
  );
}
