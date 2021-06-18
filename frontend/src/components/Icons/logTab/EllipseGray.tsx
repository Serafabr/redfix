import * as React from "react";

function SvgEllipseGray(props) {
  return (
    <svg
      width={10}
      height={10}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx={5}
        cy={5}
        r={4}
        fill="#fff"
        stroke="#DFDFDF"
        strokeWidth={2}
      />
    </svg>
  );
}

export default SvgEllipseGray;
