import * as React from "react";

function SvgUsers(props) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.25 8.6a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5zM5.01 10.922A3 3 0 00.5 9.667M13.75 8.6a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5zM10.99 10.922a3 3 0 014.51-1.255"
        stroke="#1589EE"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 8.6a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zM12 13.1a4.036 4.036 0 00-8 0"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgUsers;
