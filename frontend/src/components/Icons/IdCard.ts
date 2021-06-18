import * as React from "react";

function SvgIdCard(props) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      opacity={0.3}
      {...props}
    >
      <path
        d="M5.5 7.5a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5zM2.5 11a3 3 0 016 0h-6zM9.5 6h3M9.5 8h4"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 2h-13a1 1 0 00-1 1v10a1 1 0 001 1h2a1 1 0 112 0h5a1 1 0 012 0h2a1 1 0 001-1V3a1 1 0 00-1-1z"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgIdCard;
