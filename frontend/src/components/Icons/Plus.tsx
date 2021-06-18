/*************************\
 * General types
\*************************/

import { BasicIconProps } from './_types';

/*************************\
 * PropTypes
\*************************/

type Props = BasicIconProps;

/*************************\
 * Plus component
\*************************/

function SvgPlus({
  width = 16,
  height = 16,
  strokeWidth = 1.5,
  strokeColor = "#767676",
  ...rest
}: Props) {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M8 3.333v9.334M3.333 8h9.334"
        
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgPlus;
