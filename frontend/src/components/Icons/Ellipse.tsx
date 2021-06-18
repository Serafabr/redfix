/*************************\
 * General types
\*************************/

import { BasicIconProps } from './_types';

/*************************\
 * PropTypes
\*************************/

type Props = BasicIconProps;

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
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...rest}
    >
      <circle
        cx={5}
        cy={5}
        r={4}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export default SvgEllipseBlue;
