/*************************\
 * General types
\*************************/

import { BasicIconProps } from './_types';

/*************************\
 * PropTypes
\*************************/

type Props = BasicIconProps;

/*************************\
 * ClockExclamation component
\*************************/

function SvgClockExclamation({
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
        d="M2.27 6.523a3.343 3.343 0 01-1.278-.956A7.417 7.417 0 105.75.93c.404.35.723.796.922 1.302a5.917 5.917 0 11-4.403 4.29z"
        fill="#767676"
      />
      <path
        d="M8 4v4l2.667 1.333"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.569 6.119a2.667 2.667 0 100-5.333 2.667 2.667 0 000 5.333zm.278-3.778a.278.278 0 10-.556 0v1.111a.278.278 0 10.556 0v-1.11zm-.278 1.945a.278.278 0 000 .555h.003a.278.278 0 100-.555h-.003z"
        fill="#767676"
      />
    </svg>
  );
}

export default SvgClockExclamation;
