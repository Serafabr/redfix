import * as React from "react";

function SvgQuick(props) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.667 1.333L2 9.333h6l-.667 5.334 6.667-8H8l.667-5.334z"
        stroke="#767676"
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgQuick;
