/*************************\
 * General types
\*************************/

import { ColorType, SizeType } from './_types';

/*************************\
 * PropTypes
\*************************/

type Props = SizeType & ColorType;

/*************************\
 * XCircle component
\*************************/

function SvgXCircle({
  width = 16,
  height = 16,
  strokeWidth = 1.3,
  strokeColor = "#767676",
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
        d="M8 14.667A6.667 6.667 0 108 1.333a6.667 6.667 0 000 13.334zM10 6l-4 4M6 6l4 4"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgXCircle;
