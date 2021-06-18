import * as React from "react";

function SvgNotesPaper(props) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#notes-paper_svg__clip0)"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M9.086 15.5H1.5a1 1 0 01-1-1v-13a1 1 0 011-1h13a1 1 0 011 1v7.586a1 1 0 01-.293.707l-5.414 5.414a1 1 0 01-.707.293v0z"
          stroke="#1589EE"
        />
        <path d="M9.5 15.41V10.5a1 1 0 011-1h4.91" stroke="#1589EE" />
        <path d="M4.5 4.5h8M4.5 7.5H8" stroke="#fff" />
      </g>
      <defs>
        <clipPath id="notes-paper_svg__clip0">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgNotesPaper;
