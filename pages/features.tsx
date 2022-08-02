import React from "react";

const features = () => {
  return (
    <div className="w-[80%] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div>
        <img src="https://via.placeholder.com/600/92c952" className="h-72 w-full" alt="" />
        <span>Hello world</span>
      </div>
      <div className="h-50">
        <img src="https://via.placeholder.com/600/24f355" className="h-72 w-full" alt="" />
        <span>Hello world</span>
      </div>
      <div className="h-50">
        <img src="https://via.placeholder.com/600/24f355" className="h-72 w-full" alt="" />
        <span>Hello world</span>
      </div>
    </div>
  );
};

export default features;
