import * as React from "react";

function SvgEllipseBlue(props) {
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
        stroke="#00A3BF"
        strokeWidth={2}
      />
    </svg>
  );
}

export default SvgEllipseBlue;
