import React, { useState } from "react";

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const data = [
    {
      desc: "“The day we sign the agreement with ATek, Atek manage our IT service 5 Star”",
      owner: "Clara Rodriguez",
      occu: "Executive Director of Aurello Inc.",
    },
    {
      desc: "“ATEK provide best Backup service for DR.”",
      owner: "Joe Strauss",
      occu: "CEO of ML Associates",
    },
    {
      desc: "“All the Resources provided by ATEK are highly experience, Totally Recommended”",
      owner: "Martin watt",
      occu: "Senior VP of Hardy Construction",
    },
  ];

  const quote = (desc, owner, occu) => {
    return (
      <div className="flex flex-col justify-center text-center h-96 px-48">
        <p className="text-blue-900 text-2xl">Testimonials</p>
        <p className="text-blue-900 text-4xl my-14 leading-snug">{desc}</p>
        <div className="text-red-600 text-base font-semibold">
          <p>{owner}</p>
          <p>{occu}</p>
        </div>
      </div>
    );
  };

  const next = () => {
    let curr = current;
    curr = (curr + 1) % 3;
    setCurrent(curr);
  };

  const prev = () => {
    let curr = current;
    curr = curr - 1;
    if (curr < 0) setCurrent(data.length - 1);
    else setCurrent(curr);
  };

  const prevButton = () => {
    return (
      <div onClick={prev}>
        <p>Prev</p>
      </div>
    );
  };

  const nextButton = () => {
    return (
      <div onClick={next}>
        <p>Next</p>
      </div>
    );
  };

  return (
    <div className="bg-stone-200 flex items-center justify-between">
      {prevButton()}
      {quote(data[current].desc, data[current].owner, data[current].occu)}
      {nextButton()}
    </div>
  );
}
