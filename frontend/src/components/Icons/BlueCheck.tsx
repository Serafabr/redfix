import * as React from "react";

function SvgBlueCheck(props) {
  return (
    <svg
      width={14}
      height={10}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.333 1L5 8.333 1.667 5"
        stroke="#1589EE"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgBlueCheck;
