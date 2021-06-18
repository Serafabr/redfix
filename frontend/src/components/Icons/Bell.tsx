/*************************\
 * General types
\*************************/

import { BasicIconProps } from './_types';

/*************************\
 * PropTypes
\*************************/

type Props = BasicIconProps;

/*************************\
 * Bell component
\*************************/

function SvgBell({
  width = 16,
  height = 16,
  strokeWidth = 1.8,
  strokeColor = "#767676",
  fillColor = "none",
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
        d="M12 5.333a4 4 0 10-8 0c0 4.667-2 6-2 6h12s-2-1.333-2-6zM9.153 14a1.333 1.333 0 01-2.306 0"
        stroke={"767676"}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgBell;
