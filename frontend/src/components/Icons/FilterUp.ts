import * as React from "react";

function SvgFilterUp(props) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.5 12V5m0 0L1 6.556M2.5 5L4 6.556"
        stroke="#767676"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 5H7l3.2 3.679v2.543l1.6.778V8.679L15 5z"
        fill="#767676"
        stroke="#767676"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgFilterUp;
