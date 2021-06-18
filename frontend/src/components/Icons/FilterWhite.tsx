import * as React from "react";

function SvgFilterWhite(props) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.667 2H1.333l5.334 6.307v4.36L9.333 14V8.307L14.667 2z"
        stroke="#767676"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgFilterWhite;
