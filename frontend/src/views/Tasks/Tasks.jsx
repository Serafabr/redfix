import React from 'react';
import tableConfig from './utils/tableConfig';
import { customFilters, filterAttributes } from './utils/filterParameters';
import searchableAttributes from './utils/searchParameters';
import paths from '../../paths';
import CustomTable from '../../components/Tables/CustomTable';
import AssetCard from '../../components/Cards/AssetCard';

import { useQuery } from '@apollo/react-hooks';

import { TASKS_QUERY } from './graphql/gql';
import prepareData from '../../components/DataManipulation/prepareData';


const Tasks = (props) => {
  const { loading, data: { allTaskData: { nodes: rawData } = [] } = [] } = useQuery(TASKS_QUERY);
  
  const data = prepareData(rawData, tableConfig);
  
  return (
    <div style={{ maxWidth: '1100px', margin: "0 auto" }}>
      <AssetCard
        sectionName={"Tarefas"}
        sectionDescription={"Lista de ordens de serviço de engenharia"}
        handleCardButton={() => { props.history.push(paths.task.create) }}
        buttonName={"Nova Tarefa"}
      >
        {
          !loading && (
            <CustomTable
              type={'full'}
              tableConfig={tableConfig}
              customFilters={customFilters}
              filterAttributes={filterAttributes}
              searchableAttributes={searchableAttributes}
              selectedData={{}}
              handleSelectData={() => {}}
              data={data}
            />
          )
        }
      </AssetCard>
    </div>
  );
}

export default Tasks;