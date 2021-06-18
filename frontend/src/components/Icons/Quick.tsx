/*************************\
 * General types
\*************************/

import { BasicIconProps } from './_types';

/*************************\
 * PropTypes
\*************************/

type Props = BasicIconProps;

/*************************\
 * Quick component
\*************************/

function SvgQuick({
  width = 16,
  height = 16,
  strokeWidth = 1.3,
  strokeColor = "#767676",
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
        d="M8.667 1.333L2 9.333h6l-.667 5.334 6.667-8H8l.667-5.334z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgQuick;
