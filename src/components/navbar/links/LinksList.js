import React from "react";
import LinkStyled from "../LinkStyled";

export default function LinksList() {
  return (
    <div className="flex">
      <LinkStyled path={"/"} label={"Home"}></LinkStyled>
      <LinkStyled path={"/careers"} label={"Careers"}></LinkStyled>
      <LinkStyled path={"/careers"} label={"Why Choose Us"}></LinkStyled>
      <LinkStyled path={"/careers"} label={"Our Services"}></LinkStyled>
      <LinkStyled path={"/careers"} label={"Industries"}></LinkStyled>
      <LinkStyled path={"/careers"} label={"Contact Us"}></LinkStyled>
    </div>
  );
}
