import React from "react";

const AuthNav = () => {
  return (
    <div>
      <button className="py-[8px] px-[25px] text-blue-500">
        <a>Login</a>
      </button>
      <button className="text-white bg-blue-500 py-[8px] px-[25px] rounded-lg">
        <a>Register</a>
      </button>
    </div>
  );
};

export default AuthNav;
