/*************************\
 * General types
\*************************/

import { ColorType, SizeType } from './_types';

/*************************\
 * PropTypes
\*************************/

type Props = SizeType & ColorType;

/*************************\
 * Ellipse component
\*************************/

function SvgEllipseBlue({
  width = 10,
  height = 10,
  strokeWidth = 2,
  strokeColor = "#00A3BF",
  fillColor = "#FFF",
  ...rest
}: Props) {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <circle
        cx={5}
        cy={5}
        r={4}
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export default SvgEllipseBlue;
