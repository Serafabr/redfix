/*************************\
 * General types
\*************************/

import { ColorType, SizeType } from './_types';

/*************************\
 * PropTypes
\*************************/

type Props = SizeType & ColorType;

/*************************\
 * FilterUp component
\*************************/

function SvgFilterUp({
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
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M2.5 12V5m0 0L1 6.556M2.5 5L4 6.556"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 5H7l3.2 3.679v2.543l1.6.778V8.679L15 5z"
        fill={fillColor}
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgFilterUp;
