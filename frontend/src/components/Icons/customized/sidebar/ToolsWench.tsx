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
 * ToolsWench component
\*************************/

function SvgToolsWench({
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
        clipPath="url(#tools-wench_svg__clip0)"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10.572 5.428l3.162 3.163" stroke="#fff" />
        <path
          d="M14.107 8.257a4.487 4.487 0 00.867-5.109l-2.28 2.28a1.5 1.5 0 11-2.122-2.121l2.28-2.28A4.475 4.475 0 006.877 7l-5.851 5.853a1.5 1.5 0 102.121 2.121L9 9.123a4.487 4.487 0 005.107-.866v0z"
          stroke={hovered ? "#1589EE" : "#FFF"}
        />
      </g>
      <defs>
        <clipPath id="tools-wench_svg__clip0">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgToolsWench;
