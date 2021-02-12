import gql from 'graphql-tag';
import paths from '../../paths';

export default {
  paths: paths.task,
  GQLs: {
    update: {
      query: gql`
        query ($id: Int!) {
          formData: allTaskFormData {
            nodes {
              assetOptions
              categoryOptions
              contractOptions
              priorityOptions
              projectOptions
              statusOptions
              teamOptions
            }
          }
          idData: allTaskData (condition: {taskId: $id}) {
            nodes {
              taskId
              title
              description
              taskStatusId
              taskPriorityId
              taskCategoryId
              projectId
              contractId
              teamId
              place
              progress
              dateLimit
              dateEnd
              dateStart
              assets
            }
          }
        }
      `,
      mutation: gql`
        mutation (
          $id: Int!,
          $attributes: TaskInput!,
          $assets: [Int!]!
        ) {
          mutationResponse: modifyTask (
            input: {
              id: $id
              attributes: $attributes
              assets: $assets
            }
          ) {
            id
          }
        }
      `
    },
    create: {
      query: gql`
        query {
          formData: allTaskFormData {
            nodes {
              assetOptions
              categoryOptions
              contractOptions
              priorityOptions
              projectOptions
              statusOptions
              teamOptions
            }
          }
        }
      `,
      mutation: gql`
        mutation (
          $attributes: TaskInput!,
          $assets: [Int!]!
          $filesMetadata: [FileMetadatumInput]
        ) {
          mutationResponse: insertTask (
            input: {
              attributes: $attributes
              assets: $assets
              filesMetadata: $filesMetadata
            }
          ) {
            id
          }
        }
      `
    },
  },
  getInitialFormState: (idData, mode) => {
    
    const baseState = {
      taskStatusId: 1,
      taskPriorityId: 1,
      taskCategoryId: 1,
      taskStatusId: 1,
      projectId: null,
      contractId: null,
      teamId: null,
      title: null,
      description: null,
      place: null,
      progress: null,
      dateLimit: null,
      dateStart: null,
      dateEnd: null,
    };

    const result = {
      ...baseState,
    };

    if (mode === 'update') {
      Object.keys(baseState).forEach(key => result[key] = idData ? idData[key] : "");
    }

    result.assets = idData && idData.assets
      ? idData.assets
      : [];

    return result;
  },
  getFormVariables: formState => ({
    attributes: {
      taskStatusId: formState.taskStatusId || 1,
      taskPriorityId: formState.taskPriorityId || 1,
      taskCategoryId: formState.taskCategoryId || 1,
      projectId: formState.projectId,
      contractId: formState.contractId,
      teamId: formState.teamId,
      title: formState.title || 'title',
      description: formState.description || 'description',
      place: formState.place,
      progress: formState.progress,
      dateLimit: formState.dateLimit,
      dateStart: formState.dateStart,
      dateEnd: formState.dateEnd,
    },
    assets: [1],//formState.assets.length > 0 ? formState.assets.map(asset => asset.assetId) : null,
    // supplies: // TODO
    // qty: // TODO
    files: formState.files.length > 0 ? formState.files : null,
    filesMetadata: formState.filesMetadata.length > 0 ? formState.filesMetadata : null,
  }),
}
