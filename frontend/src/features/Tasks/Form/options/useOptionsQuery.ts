import { useMemo } from 'react';
import { useQuery } from '@apollo/client'
import { OptionsType } from '../../../../components/SelectBox/_types';
// Graphql
import { TEAM_OPTIONS, PROJECT_OPTIONS, ASSET_OPTIONS } from './graphql';
import { prepareTeams, prepareProjects, prepareAssets } from './prepareOptions';

/*************************\
 * Custom hook - Get options for task form
\*************************/

export const useOptionsQuery = () => {
  
  // Query Options
  const { loading: loadingTeams, error: errorTeams, data: dataTeams } = useQuery(TEAM_OPTIONS);
  const { loading: loadingProjects, error: errorProjects, data: dataProjects } = useQuery(PROJECT_OPTIONS);
  const { loading: loadingAssets, error: errorAssets, data: dataAssets } = useQuery(ASSET_OPTIONS);
  
  // Prepare team options 
  const dataTeamOptions = useMemo(() => {
    if (loadingTeams || errorTeams) { return undefined; }
    return prepareTeams(dataTeams);
  }, [dataTeams, loadingTeams, errorTeams]);
  
  const dataProjectOptions = useMemo(() => {
    if (loadingProjects || errorProjects) { return undefined; }
    return prepareProjects(dataProjects);
  }, [dataProjects, loadingProjects, errorProjects]);
  
  const dataAssetOptions = useMemo(() => {
    if (loadingAssets || errorAssets) { return undefined; }
    return prepareAssets(dataAssets);
  }, [dataAssets, loadingAssets, errorAssets]);
  
  
  // Result
  const teamOptions = { loading: loadingTeams, error: errorTeams, data: dataTeamOptions }
  const projectOptions = { loading: loadingProjects, error: errorProjects, data: dataProjectOptions }
  const assetOptions = { loading: loadingAssets, error: errorAssets, data: dataAssetOptions }
  
  // Return the result
  return { teamOptions, projectOptions, assetOptions };  
}
