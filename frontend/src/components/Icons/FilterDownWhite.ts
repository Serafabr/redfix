import * as React from "react";

function SvgFilterDownWhite(props) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.5 5v7m0 0L4 10.444M2.5 12L1 10.444M15 5H7l3.2 3.679v2.543l1.6.778V8.679L15 5z"
        stroke="#767676"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgFilterDownWhite;
