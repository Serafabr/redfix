import React, { Component } from 'react';
import { itemsMatrixTasks } from '../utils/descriptionMatrix';
import PaneTitle from '../../../components/TabPanes/PaneTitle';
import PaneTextContent from '../../../components/TabPanes/PaneTextContent';
import tableConfig from '../utils/tasksTab/tableConfig';
import searchableAttributes from '../utils/tasksTab/searchParameters';
import CustomTable from '../../../components/Tables/CustomTable';
import './Tabs.css';

import { useQuery } from '@apollo/react-hooks';

import { TASKS_QUERY } from '../../../graphql/task/queryGQL';
import prepareData from '../../../components/DataManipulation/prepareData';

export default function TasksTab({ data }) {
  const { depotId } = data;

  // SEARCH ALL TASKS -> SHOULD BE DONE ON DATABASE
  const { loading, data: dataTasks } = useQuery(TASKS_QUERY);
  let tasks = dataTasks ? dataTasks.allTaskData.nodes.filter(task => (task.supplies.some(supply => supply.depotId == depotId))) : [];
  tasks = prepareData(tasks.map(task => ({...task, depotId})), tableConfig);
  // END
  
  return (
    <div className="tabpane-container">
      <PaneTitle 
        title={'Lista de Tarefas'}
      />
      <div className="tabpane__content">
        <PaneTextContent 
          numColumns='2' 
          itemsMatrix={itemsMatrixTasks(tasks)}
        />
        <CustomTable
          type={'pages-with-search'}
          tableConfig={tableConfig}
          searchableAttributes={searchableAttributes}
          data={tasks}
        />
      </div>
    </div>
  );
}