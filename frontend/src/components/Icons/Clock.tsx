/*************************\
 * General types
\*************************/

import { BasicIconProps } from './_types';

/*************************\
 * PropTypes
\*************************/

type Props = BasicIconProps;

/*************************\
 * Clock component
\*************************/

function SvgClock({
  width = 16,
  height = 16,
  strokeWidth = 1.5,
  strokeColor = "#767676",
  fillColor = "none",
  ...rest
}: Props) {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      fill-opacity="0"
      {...rest}
    >
      <path
        d="M8 14.667A6.667 6.667 0 108 1.333a6.667 6.667 0 000 13.334z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 4v4l2.667 1.333"
        
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgClock;
