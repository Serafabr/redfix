/*************************\
 * General types
\*************************/

import { SizeType } from './../../_types';

/*************************\
 * PropTypes
\*************************/

type Props = SizeType & {
  hovered?: boolean,
};

/*************************\
 * NotesTasks component
\*************************/

function SvgNotesTasks({
  width = 16,
  height = 16,
  hovered = false,
  ...rest
}: Props) {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      opacity={hovered ? 1.0 : 0.3}
      {...rest}
    >
      <g
        clipPath="url(#notes-tasks_svg__clip0)"
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M10.5 3H13a1 1 0 011 1v10.5a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h2.5a2.5 2.5 0 115 0v0z"
          stroke={hovered ? "#1589EE" : "#FFF"}
        />
        <path d="M8 2.5A.25.25 0 118 3a.25.25 0 010-.5" stroke={hovered ? "#1589EE" : "#FFF"} />
        <path
          d="M4.5 7H8M10 7h1.5M11.5 9.5H8M6 9.5H4.5M4.5 12H8M10 12h1.5"
          stroke="#fff"
        />
      </g>
      <defs>
        <clipPath id="notes-tasks_svg__clip0">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgNotesTasks;
