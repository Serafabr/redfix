import { useQuery } from '@apollo/client'
// Graphql
import { TEAM_OPTIONS } from './graphql';
import { prepareTeams } from './prepareOptions';

/*************************\
 * Custom hook - Get options to task form
\*************************/

export const useOptionsQuery = () => {
  
  // Team options
  const { loading: loadingTeam, error: errorTeam, data: dataTeam } = useQuery(TEAM_OPTIONS, {
    onCompleted: (data) => {
      return prepareTeams(data)
    },
  });
  const teamOptions = { loading: loadingTeam, error: errorTeam, data: dataTeam }
  
  // Result
  return { teamOptions };  
}
