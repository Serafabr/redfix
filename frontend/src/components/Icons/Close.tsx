/*************************\
 * General types
\*************************/

import { ColorType, SizeType } from './_types';

/*************************\
 * PropTypes
\*************************/

type Props = SizeType & ColorType;

/*************************\
 * Close component
\*************************/

function SvgClose({
  width = 16,
  height = 16,
  strokeWidth = 2,
  strokeColor = "#C8C8C8",
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
        d="M12 4l-8 8M4 4l8 8"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgClose;
