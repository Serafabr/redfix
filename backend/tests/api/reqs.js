const fs = require('fs');
const FormData = require('form-data');

function buildReqBody(vars){
  return {
    variables: {
      id: vars.id,
      attributes: {
        taskStatusId: vars.taskStatusId,
        taskPriorityId: vars.taskPriorityId,
        taskCategoryId: vars.taskCategoryId,
        projectId: vars.projectId,
        teamId: vars.teamId,
        title: vars.title,
        description: vars.description,
        place: vars.place,
        progress: vars.progress,
        dateLimit: vars.dateLimit,
        dateStart: vars.dateStart,
        dateEnd: vars.dateEnd
      },
      assets: vars.assets,
      files: vars.files,
      filesMetadata: vars.filesMetadata
    },
    query: `mutation (
      $attributes: TaskInput!,
      $assets: [Int!]!,
      $filesMetadata: [FileMetadatumInput]
    ) {
      insertTask(input:{
        attributes: $attributes,
        assets: $assets,
        filesMetadata: $filesMetadata
      }) {
        id
        __typename
      }
    }`
  };
}

const varsSuccess = {
  id: null,
  taskStatusId: 1,
  taskPriorityId: 1,
  taskCategoryId: 1,
  projectId: null,
  teamId: null,
  title: "title",
  description: "description",
  place: null,
  progress: null,
  dateLimit: null,
  dateStart: null,
  dateEnd: null,
  teamId: 1,
  assets: [1],
  files: null,
  filesMetadata: null,
}

let form = new FormData();
form.append('operations', JSON.stringify(buildReqBody(Object.assign(
  {...varsSuccess},
  {
    files: [null],
    filesMetadata: [{
      filename: "test.txt",
      uuid: "de741848-5e90-4c5e-8699-78aca9b37aba",
      size: 1234
    }]
  }
))));
form.append('map', JSON.stringify({0: ["variables.files.0"]}));
form.append('0', fs.createReadStream(__dirname + '/test.txt'));

const varsFailNoAssets = Object.assign(
  {...varsSuccess},
  {
    assets: null,
  }
);

module.exports = {
  reqSuccess: buildReqBody(varsSuccess),
  reqSuccessWithFile: form,
}
