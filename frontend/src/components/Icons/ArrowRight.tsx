/*************************\
 * General types
\*************************/

import { BasicIconProps } from './_types';

/*************************\
 * PropTypes
\*************************/

type Props = BasicIconProps;

/*************************\
 * ArrowRight component
\*************************/

function SvgArrowRight({
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
        d="M6 12l4-4-4-4"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgArrowRight;
