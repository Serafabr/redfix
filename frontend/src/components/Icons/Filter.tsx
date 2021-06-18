import * as React from "react";

function SvgFilter(props) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.5 3.5h-9l3.6 4.73v3.27l1.8 1V8.23l3.6-4.73z"
        fill="#767676"
        stroke="#767676"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgFilter;
