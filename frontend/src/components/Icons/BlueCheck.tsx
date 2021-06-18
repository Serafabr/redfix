/*************************\
 * General types
\*************************/

import { ColorType, SizeType } from './_types';

/*************************\
 * PropTypes
\*************************/

type Props = SizeType & ColorType;

/*************************\
 * BlueCheck component
\*************************/

function SvgBlueCheck({
  width = 14,
  height = 10,
  strokeWidth = 2,
  strokeColor = "#1589EE",
  fillColor = "none",
  ...rest
}: Props) {
  return (
    <svg
      width={width}
      height={height}
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M12.333 1L5 8.333 1.667 5"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgBlueCheck;
