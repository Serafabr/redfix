import * as React from "react";

function SvgCharger(props) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      opacity={0.3}
      {...props}
    >
      <g
        clipPath="url(#charger_svg__clip0)"
        stroke="#fff"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 10.5a4 4 0 01-4-4v-2a1 1 0 011-1h6a1 1 0 011 1v2a4 4 0 01-4 4zM4 3.5v-3M8 3.5v-3" />
        <path d="M6 10.5v2a2 2 0 004 0 2 2 0 014 0v3M5 5.5h2" />
      </g>
      <defs>
        <clipPath id="charger_svg__clip0">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgCharger;
