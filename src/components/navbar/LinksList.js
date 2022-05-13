import React, { useState } from "react";
import LinkStyled from "./LinkStyled";
import { AiOutlineMenu } from "react-icons/ai";
import HashLinkStyled from "./HashLinkStyled";

export default function LinksList() {
  const [show, setShow] = useState("hidden");

  const changeShow = () => {
    if (show === "hidden") setShow("");
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
        <LinkStyled func={changeShow} path={"/"} label={"Home"}></LinkStyled>
        <LinkStyled
          func={changeShow}
          path={"/careers"}
          label={"Careers"}
        ></LinkStyled>
        <LinkStyled
          func={changeShow}
          path={"/why-choose-us"}
          label={"Why Choose Us"}
        ></LinkStyled>
        <HashLinkStyled
          func={changeShow}
          path={"/#ourservices"}
          label={"Our Services"}
        ></HashLinkStyled>
        <LinkStyled
          func={changeShow}
          path={"/industries"}
          label={"Industries"}
        ></LinkStyled>
        <HashLinkStyled
          func={changeShow}
          path="/#contactform"
          label={"Contact Us"}
        ></HashLinkStyled>
      </div>
    </div>
  );
}
