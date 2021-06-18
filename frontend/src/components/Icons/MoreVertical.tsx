import * as React from "react";

function SvgMoreVertical(props) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.333 8a.667.667 0 101.334 0 .667.667 0 00-1.334 0zM7.333 12.667a.667.667 0 101.334 0 .667.667 0 00-1.334 0zM7.333 3.333a.667.667 0 101.334 0 .667.667 0 00-1.334 0z"
        fill="#767676"
        stroke="#767676"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgMoreVertical;
