import * as React from "react";

function SvgExternalLink(props) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 8.667v4A1.334 1.334 0 0110.667 14H3.333A1.334 1.334 0 012 12.667V5.333A1.333 1.333 0 013.333 4h4M10 2h4v4M6.667 9.333L14 2"
        stroke="#B1B1B1"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgExternalLink;
