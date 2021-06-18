import * as React from "react";

function SvgGraph(props) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#graph_svg__clip0)"
        fillRule="evenodd"
        clipRule="evenodd"
      >
        <path
          d="M13.922 8.576a.6.6 0 010 .848l-2.646 2.646a1.101 1.101 0 01-1.556 0l-1.222-1.222-2.576 2.576a.6.6 0 01-.849-.848L7.72 9.929a1.1 1.1 0 011.556 0l1.222 1.222 2.575-2.575a.6.6 0 01.849 0zm-5.495 2.201z"
          fill="#fff"
        />
        <path
          d="M1.497 1.1a.4.4 0 00-.4.4v13c0 .22.18.4.4.4h13a.4.4 0 00.4-.4v-13a.4.4 0 00-.4-.4h-13zm-1.6.4a1.6 1.6 0 011.6-1.6h13a1.6 1.6 0 011.6 1.6v13a1.6 1.6 0 01-1.6 1.6h-13a1.6 1.6 0 01-1.6-1.6v-13z"
          fill="#1589EE"
        />
        <path
          d="M5.497 3.1a2.4 2.4 0 100 4.8 2.4 2.4 0 000-4.8zm-3.6 2.4a3.6 3.6 0 117.2 0 3.6 3.6 0 01-7.2 0z"
          fill="#fff"
        />
        <path
          d="M5.497 1.9a.6.6 0 01.6.6v2.752l1.946 1.945a.6.6 0 01-.849.849l-2.12-2.122a.6.6 0 01-.177-.424v-3a.6.6 0 01.6-.6z"
          fill="#fff"
        />
        <path
          d="M10.397 3.5a.6.6 0 01.6-.6h2a.6.6 0 110 1.2h-2a.6.6 0 01-.6-.6zM10.397 5.5a.6.6 0 01.6-.6h2a.6.6 0 110 1.2h-2a.6.6 0 01-.6-.6z"
          fill="#1589EE"
        />
      </g>
      <defs>
        <clipPath id="graph_svg__clip0">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgGraph;
