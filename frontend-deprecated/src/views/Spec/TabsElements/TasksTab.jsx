import React, { Component } from 'react';
import DescriptionTable from '../../../components/Descriptions/DescriptionTable';
import { itemsMatrixTasks } from '../utils/descriptionMatrix';
import PaneTitle from '../../../components/TabPanes/PaneTitle';
import PaneTextContent from '../../../components/TabPanes/PaneTextContent';
import tableConfig from '../utils/tasksTab/tableConfig';
import { customFilters, filterAttributes } from '../utils/tasksTab/filterParameters';
import searchableAttributes from '../utils/tasksTab/searchParameters';
import withDataAccess from '../utils/tasksTab/withDataAccess';
import CustomTable from '../../../components/Tables/CustomTable';
import withPrepareData from '../../../components/Formating/withPrepareData';
import withSelectLogic from '../../../components/Selection/withSelectLogic';
import { compose } from 'redux';
import './Tabs.css';

import { useQuery } from '@apollo/react-hooks';

import { TASKS_QUERY } from '../../Tasks/graphql/gql';
import prepareData from '../../../components/DataManipulation/prepareData';

export default function TasksTab({ data }) {
  const { specId } = data;

  // SEARCH ALL TASKS -> SHOULD BE DONE ON DATABASE
  const { loading, data: dataTasks } = useQuery(TASKS_QUERY);
  let tasks = dataTasks ? dataTasks.allTaskData.nodes.filter(task => (task.supplies.some(supply => supply.specId == specId))) : [];
  tasks = prepareData(tasks.map(task => ({...task, specId})), tableConfig);
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