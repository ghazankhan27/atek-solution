import React from "react";
import WeAreHiringImageBG from "../components/homepage/WeAreHiringImageBG";
import OurServices from "../components/homepage/OurServices";
import TestimonialSlider from "../components/homepage/TestimonialSlider";

export default function Home() {
  return (
    <div>
      <WeAreHiringImageBG></WeAreHiringImageBG>
      <OurServices></OurServices>
      <TestimonialSlider></TestimonialSlider>
    </div>
  );
}
