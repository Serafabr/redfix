import * as React from "react";

function SvgHome(props) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 6l6-4.667L14 6v7.333a1.334 1.334 0 01-1.333 1.334H3.333A1.334 1.334 0 012 13.333V6z"
        stroke="#9B9B9B"
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 14.667V8h4v6.667"
        stroke="#9B9B9B"
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgHome;
