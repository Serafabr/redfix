/*************************\
 * General types
\*************************/

import { BasicIconProps } from './_types';

/*************************\
 * PropTypes
\*************************/

type Props = BasicIconProps;

/*************************\
 * Edit component
\*************************/

function SvgEdit({
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
        d="M7.333 2.667H2.667A1.333 1.333 0 001.333 4v9.333a1.333 1.333 0 001.334 1.334H12a1.333 1.333 0 001.333-1.334V8.667"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.333 1.667a1.414 1.414 0 112 2L8 10l-2.667.667L6 8l6.333-6.333z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgEdit;
