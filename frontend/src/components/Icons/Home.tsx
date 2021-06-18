/*************************\
 * General types
\*************************/

import { BasicIconProps } from './_types';

/*************************\
 * PropTypes
\*************************/

type Props = BasicIconProps;

/*************************\
 * Home component
\*************************/

function SvgHome({
  width = 16,
  height = 16,
  strokeWidth = 1.3,
  strokeColor = "#9B9B9B",
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
        d="M2 6l6-4.667L14 6v7.333a1.334 1.334 0 01-1.333 1.334H3.333A1.334 1.334 0 012 13.333V6z"
        
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 14.667V8h4v6.667"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgHome;
