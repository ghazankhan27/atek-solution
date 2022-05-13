import React, { useEffect } from "react";
import TitleWrapper from "../components/TitleWrapper";

export default function WhyChooseUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = [
    {
      id: "01.",
      data: "ATEK is a Business and IT Services Organization that delivers Application and Business Process Services to help clients reduce costs, enhance organizational flexibility, and improve their business and IT performance.",
    },
    {
      id: "02.",
      data: "We work with direct Clients, as we get request from client about Resource they are looking for, are recruitment lead start working and find the exact match, we do background check.",
    },
    {
      id: "03.",
      data: "An Enterprise cloud is a unified IT operating environment that melds private, public and distributed clouds, providing a single point of control for managing infrastructure and applications in any cloud.What we do? 1) we build Azure, Aws, Google Initial infrastructure.2) we use Terra form Scripts.3) Networking Support 4) DR Support for all Enterprise5) Support 24/7 week and Weekend. You can get 24/7, remote tech support for your small business.",
    },
    {
      id: "04.",
      data: "you can get 24/7, remote tech support for your small business.",
    },
  ];

  const renderItem = (item, index) => {
    return (
      <div key={index}>
        <p className="text-3xl mt-10 text-blue-900">{item.id}</p>
        <p className="text-base mt-4">{item.data}</p>
      </div>
    );
  };

  return (
    <div>
      <TitleWrapper
        title={"Why Choose Us | Staffing & IT Service"}
      ></TitleWrapper>
      <div className="md:w-11/12 border-blue-900 border-b-8">
        <img
          alt="why choose us home"
          className="w-screen"
          src="/images/image why choose us.webp"
        ></img>
      </div>
      <div className="bg-stone-100 p-8 mx-4 md:w-3/5 md:mx-auto my-24 md:my-36">
        <p className="md:text-6xl text-4xl text-blue-900 font-semibold">
          Why Choose ATS Consulting?
        </p>
      </div>
      <div className="md:w-3/5 md:mx-auto mb-36 px-4">
        {data.map((item, index) => {
          return renderItem(item, index);
        })}
      </div>
    </div>
  );
}
