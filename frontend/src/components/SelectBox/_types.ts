/*************************\
 * General types
\*************************/

export type OptionType = {
  name: string,
  selected?: boolean,
}

export type OptionsType = {
  [itemId: string]: OptionType,
};

export type OnSelectItemType = (id: string) => void;
