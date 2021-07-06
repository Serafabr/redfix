import { ReactNode } from 'react';
import { IdType } from '../SelectBox/_types';

export type TabsType = Array<string>;

export type TabViewType = {
  name: string,
  view: ReactNode;
  buttons: Array<ReactNode>
};

export type TabViewsType = {
  [id in IdType]: TabViewType
};

export type TabsPerSizeType = {
  [size: number]: number
};

export type ActiveKeyType = IdType;