import * as React from "react";

function SvgDollarSign(props) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 .667v14.666"
        stroke="#fff"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.333 3.333h-5a2.333 2.333 0 000 4.667h3.334a2.333 2.333 0 010 4.667H4"
        stroke="#1589EE"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgDollarSign;
