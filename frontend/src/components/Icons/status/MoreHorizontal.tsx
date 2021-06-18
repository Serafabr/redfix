import * as React from "react";

function SvgMoreHorizontal(props) {
  return (
    <svg
      width={12}
      height={12}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 8.667a.667.667 0 100-1.334.667.667 0 000 1.334zM12.667 8.667a.667.667 0 100-1.334.667.667 0 000 1.334zM3.333 8.667a.667.667 0 100-1.334.667.667 0 000 1.334z"
        fill="#9c7300"
        stroke="#9c7300"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgMoreHorizontal;
