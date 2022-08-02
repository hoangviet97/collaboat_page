import * as React from "react";

const Bell = (props) => (
  <svg
    height={24}
    style={{
      enableBackground: "new 0 0 24 24"
    }}
    fill="#d65654"
    width={24}
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M14 8h-4V3a2 2 0 1 1 4 0v5zM12 23a2 2 0 0 1-2-2v-1h4v1a2 2 0 0 1-2 2z" />
    <path d="M18 12.954V10a6 6 0 1 0-12 0v2.954c0 .654-.327 1.264-.87 1.626l-1.26.84A1.954 1.954 0 0 0 4.954 19h14.092a1.954 1.954 0 0 0 1.084-3.58l-1.26-.84a1.954 1.954 0 0 1-.87-1.626z" />
  </svg>
);

export default Bell;
