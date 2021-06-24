import { ReactNode } from 'react';

export type TabsType = Array<string>;

export type TabViewType = {
  name: string,
  view: ReactNode;
  buttons: Array<ReactNode>
};

export type TabViewsType = {
  [id: string]: TabViewType
};

export type TabsPerSizeType = {
  [size: number]: number
};

export type ActiveKeyType = string;