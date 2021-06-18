/*************************\
 * General types
\*************************/

import { SizeType } from './_types';

/*************************\
 * PropTypes
\*************************/

type Props = SizeType & {
  firstColor?: string,
  secondColor?: string,
};

/*************************\
 * CircleCheck component
\*************************/

function SvgCircleCheck({
  width = 16,
  height = 16,
  strokeWidth = 1.5,
  firstColor = "#767676",
  secondColor = "#767676",
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
        d="M8 14.667A6.667 6.667 0 108 1.333a6.667 6.667 0 000 13.334z"
        stroke={firstColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 6l-4.125 4L5 8.182"
        stroke={secondColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgCircleCheck;
