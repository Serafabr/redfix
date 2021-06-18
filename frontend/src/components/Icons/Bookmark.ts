import * as React from "react";

function SvgBookmark(props) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.667 14L8 10.667 3.333 14V3.333A1.333 1.333 0 014.667 2h6.666a1.333 1.333 0 011.334 1.333V14z"
        stroke="#767676"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgBookmark;
