import * as React from "react";

function SvgFolderFile(props) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#folder-file_svg__clip0)"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M15.487 8.29a.666.666 0 00-.652-.795H6.949a.667.667 0 01-.652-.534l-.185-.927a.667.667 0 00-.652-.533H1.165a.667.667 0 00-.652.795l1.728 8.667a.667.667 0 00.652.533h10.612a.667.667 0 00.652-.533c.274-1.368 1.006-5.05 1.33-6.673v0zM3 3.5l.013-2.333A.667.667 0 013.68.5h8.642a.667.667 0 01.667.667l.013 4.333"
          stroke="#1589EE"
        />
        <path d="M5.008 2.495L10.5 2.5M8 4.5h2.5" stroke="#FFF" />
      </g>
      <defs>
        <clipPath id="folder-file_svg__clip0">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgFolderFile;
