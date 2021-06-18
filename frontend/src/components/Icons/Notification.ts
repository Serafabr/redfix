import * as React from "react";

function SvgNotification(props) {
  return (
    <svg
      width={20}
      height={22}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15 8.667a5 5 0 00-10 0c0 5.833-2.5 7.5-2.5 7.5h15S15 14.5 15 8.667zM11.442 19.5a1.666 1.666 0 01-2.884 0"
        stroke="#1589EE"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx={15}
        cy={5}
        r={3.75}
        fill="#FF9E2C"
        stroke="#fff"
        strokeWidth={1.5}
      />
    </svg>
  );
}

export default SvgNotification;
