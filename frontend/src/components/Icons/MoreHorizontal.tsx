/*************************\
 * General types
\*************************/

import { BasicIconProps } from './_types';

/*************************\
 * PropTypes
\*************************/

type Props = BasicIconProps;

/*************************\
 * MoreHorizontal component
\*************************/

function SvgMoreHorizontal({
  width = 16,
  height = 16,
  strokeWidth = 1.5,
  strokeColor = "#767676",
  fillColor = "#767676",
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
        d="M8 8.667a.667.667 0 100-1.334.667.667 0 000 1.334zM12.667 8.667a.667.667 0 100-1.334.667.667 0 000 1.334zM3.333 8.667a.667.667 0 100-1.334.667.667 0 000 1.334z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgMoreHorizontal;
