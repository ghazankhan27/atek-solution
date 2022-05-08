import React, { useState, useRef } from "react";
import LinkStyled from "../LinkStyled";
import { GiHamburgerMenu } from "react-icons/gi";

export default function LinksDropDown() {
  const [left, setLeft] = useState("100%");

  const nav = useRef();

  const toggleDropDown = () => {
    if (left == "0%") setLeft("100%");
    else setLeft("0%");
  };

  return (
    <div className="relative">
      <p
        className="text-blue-900 text-2xl relative z-50"
        onClick={toggleDropDown}
      >
        <GiHamburgerMenu></GiHamburgerMenu>
      </p>
      <div
        style={{ left: left }}
        className="fixed top-0 bg-white h-screen py-36 w-screen z-40 transition-all duration-300"
      >
        <LinkStyled
          func={toggleDropDown}
          path={"/"}
          label={"Home"}
        ></LinkStyled>
        <LinkStyled
          func={toggleDropDown}
          path={"/careers"}
          label={"Careers"}
        ></LinkStyled>
        <LinkStyled
          func={toggleDropDown}
          path={"/careers"}
          label={"Why Choose Us"}
        ></LinkStyled>
        <LinkStyled
          func={toggleDropDown}
          path={"/careers"}
          label={"Our Services"}
        ></LinkStyled>
        <LinkStyled
          func={toggleDropDown}
          path={"/careers"}
          label={"Industries"}
        ></LinkStyled>
        <LinkStyled
          func={toggleDropDown}
          path={"/careers"}
          label={"Contact Us"}
        ></LinkStyled>
      </div>
    </div>
  );
}
