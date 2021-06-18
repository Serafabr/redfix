/*************************\
 * General types
\*************************/

import { BasicIconProps } from './_types';

/*************************\
 * PropTypes
\*************************/

type Props = BasicIconProps;

/*************************\
 * MoreVertical component
\*************************/

function SvgMoreVertical({
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
      fill-opacity="0"
      {...rest}
    >
      <path
        d="M7.333 8a.667.667 0 101.334 0 .667.667 0 00-1.334 0zM7.333 12.667a.667.667 0 101.334 0 .667.667 0 00-1.334 0zM7.333 3.333a.667.667 0 101.334 0 .667.667 0 00-1.334 0z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgMoreVertical;
