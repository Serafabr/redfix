/*************************\
 * General types
\*************************/

import { SizeType, PriorityType } from './../_types';

const strokeColors = {
  [PriorityType.Low]: ["#DFDFDF", "#DFDFDF", "#18BD33"],
  [PriorityType.Normal]: ["#FF9E2C", "#DFDFDF", "#FF9E2C"],
  [PriorityType.High]: ["#FF3535", "#FF3535", "#FF3535"],
}

/*************************\
 * PropTypes
\*************************/

type Props = SizeType & {
  priority?: PriorityType
};

/*************************\
 * Priority component
\*************************/

function SvgPriority({
  width = 18,
  height = 18,
  priority = PriorityType.Low,
  ...rest
}: Props) {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M9 15V7.5"
        stroke={strokeColors[priority][0]}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 15V3"
        stroke={strokeColors[priority][1]}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 15v-3"
        stroke={strokeColors[priority][2]}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgPriority;
