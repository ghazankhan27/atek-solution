import React from "react";
import WeAreHiringImageBG from "../components/homepage/WeAreHiringImageBG";
import OurServices from "../components/homepage/OurServices";
import TestimonialSlider from "../components/homepage/TestimonialSlider";
import FindOutMore from "../components/homepage/FindOutMore";
import ContactUs from "../components/homepage/ContactUs";

export default function Home() {
  return (
    <div>
      <WeAreHiringImageBG></WeAreHiringImageBG>
      <OurServices></OurServices>
      <TestimonialSlider></TestimonialSlider>
      <FindOutMore></FindOutMore>
      <ContactUs></ContactUs>
    </div>
  );
}
