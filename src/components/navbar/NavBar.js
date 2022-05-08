import React, { useEffect, useState } from "react";
import LinksDropDown from "./links/LinksDropDown";
import LinksList from "./links/LinksList";
import Logo from "./Logo";

export default function NavBar() {
  const [width, setWidth] = useState(window.innerWidth);

  const getWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", getWidth);

    return () => {
      window.removeEventListener("resize", getWidth);
    };
  }, []);

  return (
    <div className="bg-white h-auto py-8 flex items-center justify-between md:justify-start fixed top-0 w-screen">
      <Logo></Logo>
      <div className="mx-6">
        {width > 768 ? (
          <LinksList></LinksList>
        ) : (
          <LinksDropDown></LinksDropDown>
        )}
      </div>
    </div>
  );
}
