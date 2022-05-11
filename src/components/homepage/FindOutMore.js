import React from "react";
import { Link } from "react-router-dom";

export default function FindOutMore() {
  const getFreeEvaluationButton = () => {
    return (
      <div>
        <Link to={"careers"}>
          <button className="text-sm md:px-6 md:py-4 px-2 py-1 bg-blue-900 text-white duration-300 hover:bg-red-600">
            +
          </button>
        </Link>
        <Link to={"careers"}>
          <button className="text-sm md:px-6 md:py-4 px-2 py-1 bg-red-600  text-white duration-300 hover:bg-blue-900">
            Get Free Evaluation
          </button>
        </Link>
      </div>
    );
  };

  const title = () => {
    return (
      <p className="md:text-left text-center text-2xl md:text-6xl text-blue-900">
        Ready to find out more?
      </p>
    );
  };

  const description = () => {
    return (
      <div className="flex mt-8 md:mt-10">
        <div className="h-1 w-24 bg-blue-900 rounded mt-3 mr-12 hidden md:block"></div>
        <p className="md:w-3/4">
          ATek Solution Service has successfully placed candidates at all levels
          in a variety of companies. We deliver the talent our clients need,
          when they need it, at the rate they need us to work with. Partnering
          up with Onboard ATek, our clients are guaranteed Quality Candidates
          faster, at Competitive Rates enabling them to meet their commitments.
          IT services: ATek is a Business and IT Services Organization that
          delivers Application and Business Process Services to help clients
          reduce costs, enhance organizational flexibility, and improve their
          business and IT performance. ATEK provides innovative and cost
          effective solutions for our clients that help meet their strategic
          resource requirements.
        </p>
      </div>
    );
  };

  return (
    <div className="flex flex-col md:w-4/5 mx-auto my-20 items-end text-justify">
      <div className="py-10 px-6 md:py-24 md:pb-30 md:px-36 bg-stone-200 shadow-md">
        {title()}
        {description()}
      </div>
      {getFreeEvaluationButton()}
    </div>
  );
}
