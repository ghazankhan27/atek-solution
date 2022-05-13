import React from "react";
import WeAreHiringImageBG from "../components/homepage/WeAreHiringImageBG";
import OurServices from "../components/homepage/OurServices";
import TestimonialSlider from "../components/homepage/TestimonialSlider";
import FindOutMore from "../components/homepage/FindOutMore";
import TitleWrapper from "../components/TitleWrapper";

export default function Home() {
  return (
    <div>
      <TitleWrapper title={"Home | Staffing & IT Service"}></TitleWrapper>
      <WeAreHiringImageBG></WeAreHiringImageBG>
      <OurServices></OurServices>
      <TestimonialSlider></TestimonialSlider>
      <FindOutMore></FindOutMore>
    </div>
  );
}
