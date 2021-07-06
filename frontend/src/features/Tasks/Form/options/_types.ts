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