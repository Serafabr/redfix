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
 * Building component
\*************************/

function SvgBuilding({
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
      <path
        d="M9.167.5h5.666a.667.667 0 01.667.667v14a.333.333 0 01-.333.333H8.833a.333.333 0 01-.333-.333v-14A.667.667 0 019.167.5v0z"
        stroke={hovered ? "#1589EE" : "#FFF"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 2.5V3M13.5 2.5V3M10.5 5v.5M13.5 5v.5M10.5 7.5V8M13.5 7.5V8M10.5 10v.5M13.5 10v.5M10.5 12.5v.5M13.5 12.5v.5"
        stroke="#FFF"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M.5 8.5h6v6.667a.333.333 0 01-.333.333H.833a.333.333 0 01-.333-.333V8.5zM1.167 6.5h4.666a.667.667 0 01.667.667V8.5h-6V7.167a.667.667 0 01.667-.667v0z"
        stroke={hovered ? "#1589EE" : "#FFF"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 10.5v.5M4.5 10.5v.5M2.5 13v.5M4.5 13v.5"
        stroke="#FFF"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgBuilding;
