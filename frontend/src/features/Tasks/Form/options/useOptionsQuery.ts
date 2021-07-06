import { useMemo } from 'react';
import { useQuery } from '@apollo/client'
import { OptionsType } from '../../../../components/SelectBox/_types';
// Graphql
import { TEAM_OPTIONS } from './graphql';
import { prepareTeams } from './prepareOptions';
import { TeamOptions } from './_types';

/*************************\
 * Custom hook - Get options to task form
\*************************/

export const useOptionsQuery = () => {
  
  // Team options
  const { loading: loadingTeam, error: errorTeam, data: dataTeam } = useQuery(TEAM_OPTIONS);
  
  // Prepare team options
  const dataTeamOptions = useMemo(() => {
    if (loadingTeam || errorTeam) { return undefined; }
    return prepareTeams(dataTeam);
  }, [dataTeam]);
  
  
  // result
  const teamOptions = { loading: loadingTeam, error: errorTeam, data: dataTeamOptions }
  
  // Return the result
  return { teamOptions };  
}
