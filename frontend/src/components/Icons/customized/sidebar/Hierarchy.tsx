import * as React from "react";

function SvgHierarchy(props) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#hierarchy_svg__clip0)"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M2.5 12.5V9.818a.318.318 0 01.317-.318h10.364a.318.318 0 01.318.318V12.5M8 7.5v5M2.5 15.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM8 15.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM13.5 15.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
          stroke="#1589EE"
        />
        <path
          d="M8 4.5a2 2 0 100-4 2 2 0 000 4zM11 7.5A3.31 3.31 0 007.949 5a3.31 3.31 0 00-3.052 2.5"
          stroke="#fff"
        />
      </g>
      <defs>
        <clipPath id="hierarchy_svg__clip0">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgHierarchy;
