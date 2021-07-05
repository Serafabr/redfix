/*************************\
 * General types
\*************************/

export type OptionType = {
  name: string,
}

export type OptionsType = {
  [itemId: string]: OptionType,
};

export type SelectionObjectType = {
  [itemId: string]: boolean
};

export type OnSelectItemType = (id: string) => void;

export enum AlignListType { Left, Right };
