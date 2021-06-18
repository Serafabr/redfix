/*************************\
 * General types
\*************************/

import { BasicIconProps } from './_types';

/*************************\
 * PropTypes
\*************************/

type Props = BasicIconProps;

/*************************\
 * Headphones component
\*************************/

function SvgHeadphones({
  width = 16,
  height = 16,
  strokeWidth = 1.8,
  strokeColor = "#767676",
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
        d="M2 12V8a6 6 0 1112 0v4"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 12.667A1.333 1.333 0 0112.667 14H12a1.333 1.333 0 01-1.333-1.333v-2A1.333 1.333 0 0112 9.333h2v3.334zm-12 0A1.333 1.333 0 003.333 14H4a1.333 1.333 0 001.333-1.333v-2A1.333 1.333 0 004 9.333H2v3.334z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgHeadphones;
