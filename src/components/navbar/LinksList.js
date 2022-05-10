import React, { useState } from "react";
import LinkStyled from "./LinkStyled";
import { AiOutlineMenu } from "react-icons/ai";

export default function LinksList() {
  const [show, setShow] = useState("hidden");

  const changeShow = () => {
    if (show == "hidden") setShow("");
    else setShow("hidden");
  };

  return (
    <div className="flex flex-col items-end mt-6 md:mt-0">
      <div
        onClick={changeShow}
        className="md:hidden text-blue-900 hover:text-red-600 transition hover:cursor-pointer"
      >
        <AiOutlineMenu></AiOutlineMenu>
      </div>
      <div className={show + " md:flex mt-4 md:mt-0 transition-all"}>
        <LinkStyled path={"/"} label={"Home"}></LinkStyled>
        <LinkStyled path={"/careers"} label={"Careers"}></LinkStyled>
        <LinkStyled path={"/careers"} label={"Why Choose Us"}></LinkStyled>
        <LinkStyled path={"/careers"} label={"Our Services"}></LinkStyled>
        <LinkStyled path={"/careers"} label={"Industries"}></LinkStyled>
        <LinkStyled path={"/careers"} label={"Contact Us"}></LinkStyled>
      </div>
    </div>
  );
}