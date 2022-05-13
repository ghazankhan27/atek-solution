import React from "react";
// import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function TestimonialSlider() {
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
      <div className="flex flex-col justify-center text-center h-96 md:px-48">
        <p className="text-blue-900 md:text-2xl font-semibold">Testimonials</p>
        <p className="text-blue-900 md:text-4xl my-14 leading-snug font-bold">
          {desc}
        </p>
        <div className="text-red-600 text-xs md:text-base font-semibold">
          <p>{owner}</p>
          <p>{occu}</p>
        </div>
      </div>
    );
  };

  const myCarousal = () => {
    return (
      <Carousel showStatus={false} showThumbs={false} infiniteLoop={true}>
        {data.map((item, index) => (
          <div key={index}>{quote(item.desc, item.owner, item.occu)}</div>
        ))}
      </Carousel>
    );
  };

  return (
    <div className="bg-stone-100 md:py-16 my-20 md:my-36 md:border-b-8 border-b-4 border-blue-900 shadow-lg">
      {myCarousal()}
    </div>
  );
}
