import React from "react";
import Link from "next/link";

const AuthNav = () => {
  return (
    <div>
      <Link href="https://app.collaboat.cz/login">
        <button className="py-[8px] px-[25px] text-blue-500">Login</button>
      </Link>
      <Link href="https://app.collaboat.cz/register">
        <button className="text-white bg-blue-500 py-[8px] px-[25px] rounded-lg">Register</button>
      </Link>
    </div>
  );
};

export default AuthNav;
