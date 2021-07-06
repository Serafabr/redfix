// Types
import { OptionsType } from '../../../../components/SelectBox/_types';
import { Team, TeamOptions } from './_types';

/*************************\
 * Prepare team options
\*************************/

export const prepareTeams = (teamOptions: TeamOptions) => {
  
  // Get array of teams
  const { teams } = teamOptions;
  const { nodes } = teams;
  
  // Result
  const options: OptionsType = {};
  
  nodes.forEach((team: Team) => {
    const { teamId, name } = team;
    options[teamId] = { name }
  });
  
  return options;
}