/*************************\
 * Team category type
\*************************/

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
  assetId: number,
  assetSf: string,
}

export type Assets = {
  assets: {
    nodes: Array<Asset>,
  },
}