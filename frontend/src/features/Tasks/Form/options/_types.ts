/*************************\
 * Team category type
\*************************/

import { IdType, OptionType } from "../../../../components/SelectBox/_types"

export type Team = {
  name: string,
  teamId: number,
}

export type Teams = {
  teams: {
    nodes: Array<Team>,
  },
}

/*************************\
 * Project category type
\*************************/

export type Project = {
  name: string,
  projectId: number,
}

export type Projects = {
  projects: {
    nodes: Array<Project>,
  },
}

/*************************\
 * Asset category type
\*************************/

export type Asset = {
  name: string,
  assetId: IdType,
  assetSf: string,
  assetCategoryText: string,
}

export type Assets = {
  assets: {
    nodes: Array<Asset>,
  },
}

export type AssetOption = OptionType & {
  assetSf: string,
  category: string,
}

export type AssetOptions = {
  [assetId in IdType]: AssetOption;
};