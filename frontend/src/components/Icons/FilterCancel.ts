import * as React from "react";

function SvgFilterCancel(props) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.416 8.5a2.917 2.917 0 11-5.833 0 2.917 2.917 0 015.833 0zm-3.614-1.052a.25.25 0 10-.354.354l.698.698-.698.698a.25.25 0 10.354.354l.698-.698.698.698a.25.25 0 10.354-.354l-.698-.698.698-.698a.25.25 0 00-.354-.354l-.698.698-.698-.698z"
        fill="#767676"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.333 1.25a.75.75 0 00-.572 1.234l5.156 6.097v4.086c0 .284.16.543.414.67l2.667 1.334A.75.75 0 0010.083 14v-2.299a3.514 3.514 0 01-1.5-1.266v2.351l-1.166-.583V8.307a.75.75 0 00-.178-.485L2.95 2.75H13.05l-1.919 2.27a3.54 3.54 0 011.744.26l2.364-2.796a.75.75 0 00-.572-1.234H1.333z"
        fill="#767676"
      />
    </svg>
  );
}

export default SvgFilterCancel;
