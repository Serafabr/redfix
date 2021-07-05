/*************************\
 * General types
\*************************/

import { BasicIconProps } from './_types';

/*************************\
 * PropTypes
\*************************/

type Props = BasicIconProps;

/*************************\
 * ClockCheck component
\*************************/

function SvgClockCheck({
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
      fill="none"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        stroke={strokeColor}
        d="M2.27 6.523a3.343 3.343 0 01-1.278-.956A7.417 7.417 0 105.75.93c.404.35.723.796.922 1.302a5.917 5.917 0 11-4.403 4.29z"
        fill="#767676"
      />
      <path
        d="M8 4v4l2.667 1.333"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        stroke={strokeColor}
        d="M3.667 6.119a2.667 2.667 0 100-5.333 2.667 2.667 0 000 5.333zM5.13 2.712a.244.244 0 000-.341.234.234 0 00-.335 0l-1.57 1.597-.622-.633a.234.234 0 00-.335 0 .244.244 0 000 .34l.79.804a.234.234 0 00.335 0L5.13 2.712z"
        fill="#767676"
      />
    </svg>
  );
}

export default SvgClockCheck;
