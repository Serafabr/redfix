/*************************\
 * General types
\*************************/

import { SizeType } from './../../_types';

/*************************\
 * PropTypes
\*************************/

type Props = SizeType & {
  hovered?: boolean,
};

/*************************\
 * ShipmentBox component
\*************************/

function SvgShipmentBox({
  width = 16,
  height = 16,
  hovered = false,
  ...rest
}: Props) {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      opacity={hovered ? 1.0 : 0.3}
      {...rest}
    >
      <g
        clipPath="url(#shipment-box_svg__clip0)"
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M14 4.5H2a1 1 0 00-1 1v9a1 1 0 001 1h12a1 1 0 001-1v-9a1 1 0 00-1-1z"
          stroke={hovered ? "#1589EE" : "#FFF"}
        />
        <path
          d="M14.867 5l-1.6-3.906A1 1 0 0012.35.5H3.65a1 1 0 00-.917.594L1.133 5M8 4.5v-4"
          stroke={hovered ? "#1589EE" : "#FFF"}
        />
        <path d="M9.5 12.5h3" stroke="#fff" />
      </g>
      <defs>
        <clipPath id="shipment-box_svg__clip0">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgShipmentBox;
