/*************************\
 * General types
\*************************/

import { BasicIconProps } from './_types';

/*************************\
 * PropTypes
\*************************/

type Props = BasicIconProps;

/*************************\
 * FilterWhite component
\*************************/

function SvgFilterWhite({
  width = 16,
  height = 16,
  strokeWidth = 1.5,
  strokeColor = "#767676",
  ...rest
}: Props) {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...rest}
    >
      <path
        d="M14.667 2H1.333l5.334 6.307v4.36L9.333 14V8.307L14.667 2z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgFilterWhite;
