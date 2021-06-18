import * as React from "react";

function SvgDropdown(props) {
  return (
    <svg
      width={10}
      height={6}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 1l4 4 4-4"
        stroke="#505050"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgDropdown;
