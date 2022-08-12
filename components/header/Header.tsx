import React, { useEffect, useState } from "react";
import Navigation from "../navigation/Navigation";
import AuthNav from "../navigation/AuthNav";

const Header = () => {
  const [bgColor, setBgColor] = useState("transparent");

  const changeBackground = () => {
    if (window.scrollY > 0) {
      setBgColor("white");
    } else {
      setBgColor("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <div className={`fixed w-[100%] py-7 z-30 px-[20px] bg-${bgColor} border-b-${bgColor === "white" ? "2" : "0"}`}>
      <div className="main-container flex items-center justify-between ">
        <div className="header__left-side flex items-center gap-8">
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
