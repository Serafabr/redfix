/*************************\
 * Team category type
\*************************/

export type Team = {
  name: string,
  teamId: number,
}

export type TeamOptions = {
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

export type ProjectOptions = {
  projects: {
    nodes: Array<Project>,
  },
}

/*************************\
 * Asset category type
\*************************/

export type Asset = {
  name: string,
  assetId: number,
  assetSf: string,
}

export type AssetOptions = {
  assets: {
    nodes: Array<Asset>,
  },
}