import * as React from "react";

function SvgCharger(props) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#charger_svg__clip0)"
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M6 10.5a4 4 0 01-4-4v-2a1 1 0 011-1h6a1 1 0 011 1v2a4 4 0 01-4 4zM4 3.5v-3M8 3.5v-3"
          stroke="#1589EE"
        />
        <path d="M6 10.5v2a2 2 0 004 0 2 2 0 014 0v3" stroke="#1589EE" />
        <path d="M5 5.5h2" stroke="#fff" />
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
