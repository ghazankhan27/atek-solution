import React from "react";
import { Link } from "react-router-dom";

export default function OurServices() {
  const data = [
    {
      title: "Support Consulting",
      desc: "ATEK has successfully placed candidates at all levels in a variety of companies. We deliver the talent our clients need, when they need it, at the rate they need us to work with.",
      route: "careers",
    },
    {
      title: "IT Cloud Solutions",
      desc: "We Provide 24/7 Cloud Support, we have Expert AWS, Azure, Google Cloud.",
      route: "careers",
    },
    {
      title: "Financial services",
      desc: "Our specialized recruiters connect our clients with a range of talent across the financial services industry",
      route: "careers",
    },
    {
      title: "Healthcare Staffing",
      desc: "We value the opinions of its patients and their families. The company routinely conducts patient satisfaction surveys assessing eight primary areas",
      route: "careers",
    },
    {
      title: "Construction Staffing",
      desc: "Our specialized recruiters connect our clients with a range of talent across the construction industry.",
      route: "careers",
    },
    {
      title: "Engineering Support",
      desc: "EASi provides a wide range of engineering and design services.",
      route: "careers",
    },
  ];

  const description = () => {
    return (
      <div className="bg-blue-900 px-10 py-4 md:px-52 md:py-36 flex mt-10 md:mt-0 items-center justify-center text-white">
        <div>
          <p className="text-2xl md:text-5xl font-semibold ">Our Services</p>
          <p className="mt-2 md:mt-4">
            ATek Solution Service Inc has successfully placed candidates at all
            levels in a variety of companies. We deliver the talent our clients
            need, when they need it, at the rate they need us to work with.
          </p>
        </div>
      </div>
    );
  };

  const card = (title, descp, route) => {
    return (
      <div className="overflow-auto flex flex-col bg-stone-100 px-4 md:py-6 py-2 shadow-gray-400 shadow-sm h-80">
        <p className="text-bold text-xl md:text-2xl">{title}</p>
        <p className="mt-4 text-sm md:text-base">{descp}</p>
        <Link to={route}>
          <p className="text-red-600 text-sm md:text-base mt-4">+ Learn More</p>
        </Link>
      </div>
    );
  };

  const cardsGrid = () => {
    return (
      <div className="relative md:-top-6 grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-8 gap-y-6 mx-4 my-4 md:my-0 md:mx-16">
        {data.map((item, index) => (
          <div key={index}>{card(item.title, item.desc, item.route)}</div>
        ))}
      </div>
    );
  };

  return (
    <div id="ourservices" className="md:my-0 my-20">
      {description()}
      {cardsGrid()}
    </div>
  );
}
