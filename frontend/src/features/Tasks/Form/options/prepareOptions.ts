// Types
import { OptionsType } from '../../../../components/SelectBox/_types';
import { Team, Teams, Project, Projects, Asset, Assets, AssetOptions } from './_types';

/*************************\
 * Prepare team options
\*************************/

export const prepareTeams = (teamOptions: Teams) => {
  
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

/*************************\
 * Prepare project options
\*************************/

export const prepareProjects = (projectOptions: Projects) => {
  
  // Get array of teams
  const { projects } = projectOptions;
  const { nodes } = projects;
  
  // Result
  const options: OptionsType = {};
  
  nodes.forEach((project: Project) => {
    const { projectId, name } = project;
    options[projectId] = { name }
  });
  
  return options;
}

/*************************\
 * Prepare asset options
\*************************/

export const prepareAssets = ({ assets }: Assets) => {
  
  // Get array of teams
  const { nodes } = assets;
  
  // Result
  const options: AssetOptions = {};
  
  nodes.forEach((asset: Asset) => {
    const { assetId, assetSf, name, assetCategoryText } = asset;
    options[assetId] = {
      id: assetId,
      name: `${assetSf} - ${name}`,
      assetSf,
      category: assetCategoryText,
    }
  });
  
  return options;
}