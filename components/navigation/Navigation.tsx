import React from "react";
import NavItem from "./NavItem";

const Navigation = () => {
  return (
    <nav className="navigation hidden md:block z-10">
      <ul className="flex space-x-8">
        <NavItem href="#about" text="About" />
        <NavItem href="/features" text="Features" />
        <NavItem href="#contact" text="Help Docs" />
        <NavItem href="#contact" text="Contact" />
      </ul>
    </nav>
  );
};

export default Navigation;
