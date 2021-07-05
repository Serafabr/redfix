/*************************\
 * General types
\*************************/

import { SizeType } from './_types';

/*************************\
 * PropTypes
\*************************/

type Props = SizeType & {
  firstColor: string,
  middleColor: string,
  lastColor: string,
};

/*************************\
 * BarChart component
\*************************/

function SvgBarChart({
  width = 18,
  height = 18,
  strokeWidth = 2,
  firstColor = "#DFDFDF",
  middleColor= "#DFDFDF",
  lastColor= "#DFDFDF",
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
      <path
        d="M9 15V7.5"
        stroke={firstColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 15V3"
        stroke={middleColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 15v-3"
        stroke={lastColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgBarChart;
