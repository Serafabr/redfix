import * as React from "react";

function SvgGrid(props) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      opacity={0.3}
      {...props}
    >
      <path
        d="M6.667 2H2v3.333h4.667V2zM14 2H9.333v7.333H14V2zM14 11.333H9.333V14H14v-2.667zM6.667 7.333H2V14h4.667V7.333z"
        stroke="#fff"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgGrid;
