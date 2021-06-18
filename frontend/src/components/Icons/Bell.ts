import * as React from "react";

function SvgBell(props) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 5.333a4 4 0 10-8 0c0 4.667-2 6-2 6h12s-2-1.333-2-6zM9.153 14a1.333 1.333 0 01-2.306 0"
        stroke="#767676"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgBell;
