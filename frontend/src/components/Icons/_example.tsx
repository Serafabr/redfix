/*************************\
 * General types
\*************************/

import { SizeType } from './_types';

/*************************\
 * PropTypes
\*************************/

type Props = SizeType & {
  strokeColor?: string,
};

/*************************\
 * AlertCircle component
\*************************/

function SvgAlertCircle({
  width = 16,
  height = 16,
  strokeWidth = 1.5,
  strokeColor = "#767676",
  ...rest
}: Props) {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path d="M8.00004 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8.00004C14.6667 4.31814 11.6819 1.33337 8.00004 1.33337C4.31814 1.33337 1.33337 4.31814 1.33337 8.00004C1.33337 11.6819 4.31814 14.6667 8.00004 14.6667Z" stroke="#767676" stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8 5.33337V8.00004" stroke="#767676" stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8 10.6666H8.00667" stroke="#767676" stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
}

export default SvgAlertCircle;
