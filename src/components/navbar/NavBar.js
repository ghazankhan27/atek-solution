import React from "react";
import LinksList from "./LinksList";
import Logo from "./Logo";

export default function NavBar() {
  return (
    <nav className="flex md:items-center justify-between px-4 py-2 md:px-8 md:py-4">
      <Logo></Logo>
      <LinksList></LinksList>
    </nav>
  );
}
