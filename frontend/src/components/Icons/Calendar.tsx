/*************************\
 * General types
\*************************/

import { ColorType, SizeType } from './_types';

/*************************\
 * PropTypes
\*************************/

type Props = SizeType & ColorType;

/*************************\
 * Calendar component
\*************************/

function SvgCalendar({
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
        d="M12.667 2.667H3.333C2.597 2.667 2 3.264 2 4v9.333c0 .737.597 1.334 1.333 1.334h9.334c.736 0 1.333-.597 1.333-1.334V4c0-.736-.597-1.333-1.333-1.333zM10.667 1.333V4M5.333 1.333V4M2 6.667h12M4.65 9.35h6.7M4.65 11.85h6.7"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgCalendar;
