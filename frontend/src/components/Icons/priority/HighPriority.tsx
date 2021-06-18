import * as React from "react";

function SvgHighPriority(props) {
  return (
    <svg
      width={18}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 15V7.5M13.5 15V3M4.5 15v-3"
        stroke="#ff3535"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgHighPriority;
