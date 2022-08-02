import * as React from "react";

const Person = (props) => (
  <svg viewBox="0 0 24 24" width={50} height={50} xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={12} cy={8} fill="#22c55e" r={4} className="fill-464646" />
    <path d="M20 19v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6Z" fill="#22c55e" className="fill-464646" />
  </svg>
);

export default Person;
