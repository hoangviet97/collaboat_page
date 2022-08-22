import React, { useEffect, useState } from "react";
import Navigation from "../navigation/Navigation";
import AuthNav from "../navigation/AuthNav";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <div className={`fixed w-[100%] py-7 z-30 px-[20px] ${isScrolled && "nav-bg"}`}>
      <div className="main-container flex items-center justify-between ">
        <div className="header__left-side flex flex-col md:flex-row items-center gap-8">
          <div>
            <span className="text-slate-400 tracking-wider text-2xl">COLLA</span>
            <span className="font-bold tracking-wider text-2xl">BOAT</span>
          </div>
          <Navigation />
        </div>
        <AuthNav />
      </div>
    </div>
  );
};

export default Header;
