import React from "react";

export default function Careers() {
  return (
    <div className="flex flex-col mb-2">
      <div className="md:pl-64 pl-10 mt-10">
        <p className="md:text-5xl text-4xl text-red-600">
          Find your Next Opportunity
        </p>
        <div>
          <p className="text-2xl text-blue-900 md:mt-16 mt-12">
            Type: Full Time
          </p>
          <ol className="list-decimal mt-2 md:mt-6">
            <li>ELECTRICAL DEPARTMENT MANAGER - CHARLOTTE</li>
            <li>SENIOR ELECTRICAL ENGINEER - CHARLOTTE</li>
            <li>ELECTRICAL E.I.T. - CHARLOTTE</li>
            <li>ELECTRICAL DEPARTMENT MANAGER - JACKSONVILLE</li>
            <li className="text-red-600">
              SENIOR STRUCTURAL ENGINEER - JACKSONVILLE
            </li>
            <li className="text-red-600">
              Director Of Marketing -- Waukesha, WI (New Position)
            </li>
            <li className="text-red-600">
              Senior Project Engineer -- Lake Oswego, OR (New Position)
            </li>
          </ol>
        </div>
        <div>
          <p className="text-2xl text-blue-900 md:mt-16 mt-12">Contract- W2</p>
          <ol className="list-decimal mt-2 md:mt-6">
            <li>Sr-Azure Cloud Admin- Remote</li>
            <li>AWS Cloud Admin- Remote</li>
          </ol>
        </div>
      </div>
      <div className="mt-20 w-full flex flex-col items-center">
        <p>For More information Email:</p>
        <p>info@ateksolutionservice.com</p>
      </div>
    </div>
  );
}
