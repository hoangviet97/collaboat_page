import React from "react";
import Bell from "./Bell";
import StopWatch from "./StopWatch";

const Hero = () => {
  const imgElement = React.useRef<any>(null);

  return (
    <div className="relative">
      <div className="absolute w-[100%] h-[100vh] bg-slate-100"></div>
      <div className="hero__content text-center pt-[22vh] mb-[50px] relative">
        <div className="absolute top-[250px] left-[180px] rotate-[30deg] bg-red-100 rounded-[50%] w-[40px] h-[40px] flex justify-center items-center border-2 border-red-500">
          <Bell />
        </div>
        <div className="absolute top-[150px] right-[20%] rotate-[30deg] bg-green-200 rounded-[50%] w-[52px] h-[52px] flex justify-center items-center border-2 border-green-400 z-10">
          <StopWatch />
        </div>
        <div className="w-[8px] h-[8px] absolute left-[45%] top-[120px] bg-red-500 rounded-[50%]"></div>
        <div className="w-[8px] h-[8px] absolute right-[30%] top-[320px] bg-green-400 rounded-[50%]"></div>
        <h1 className="text-5xl flex flex-col justify-center font-semibold text-stone-700 mb-[30px] leading-snug">
          <div className="title-box flex flex-row justify-center">
            <div className="text-left ml-[7px]">Control your </div>
            <div className="words text-blue-500">
              <span>project.</span>
              <span>work.</span>
              <span>team.</span>
            </div>
          </div>
          <div>Anytime, Anywhere</div>
        </h1>
        <button className="text-white bg-blue-500 py-[8px] px-[25px] rounded-lg">Get Started</button>
      </div>
      <div className="main-container z-20">
        <img className="hero__image" src="/image.png" ref={imgElement} onLoad={() => console.log(imgElement.current.naturalHeight)} alt="" />
      </div>
    </div>
  );
};

export default Hero;
