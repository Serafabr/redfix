/*************************\
 * General types
\*************************/

export type IdType = number | string;

export type OptionType = {
  id?: IdType,
  name: string,
}

export type OptionsType = {
  [itemId in IdType]: OptionType;
};

export type SelectionObjectType = {
  [itemId in IdType]: boolean;
};

export type OnSelectItemType = (id: IdType) => void;

export enum AlignListType { Left, Right };
