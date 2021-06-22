export type IconComponentType = React.ComponentType<BasicIconProps> | null;

export type SizeType = {
  width?: number,
  height?: number,
  strokeWidth?: number,
};

export type ColorType = {
  fillColor?: string,
  strokeColor?: string,
};

export type BasicIconProps = SizeType & ColorType & {
  className?: string,
};

export enum PriorityType { Low, Normal, High };