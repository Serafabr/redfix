import React, { Component } from 'react';
import DescriptionTable from '../../../components/Descriptions/DescriptionTable';
import { itemsMatrixBalance } from '../utils/descriptionMatrix';
import createTableConfig from '../utils/contractsTab/tableConfig';
import { customFilters, filterAttributes } from '../utils/contractsTab/filterParameters';
import searchableAttributes from '../utils/contractsTab/searchParameters';
import withDataAccess from '../utils/contractsTab/withDataAccess';
import CustomTable from '../../../components/Tables/CustomTable';
import PaneTitle from '../../../components/TabPanes/PaneTitle';
import PaneTextContent from '../../../components/TabPanes/PaneTextContent';
import withPrepareData from '../../../components/Formating/withPrepareData';
import withSelectLogic from '../../../components/Selection/withSelectLogic';
import { compose } from 'redux';

import prepareData from '../../../components/DataManipulation/prepareData';

import './Tabs.css';

export default function ContractsTab({ data }) {
  const depots = data.supplies ? prepareData(data.supplies, createTableConfig(data.unit)) : [];

  return (
    <div className="tabpane-container">
      <PaneTitle 
        title={'Estoques'}
      />
      <div className="tabpane__content">
        <PaneTextContent 
          numColumns='3' 
          itemsMatrix={itemsMatrixBalance(depots, data.unit)}
        />
        <CustomTable
          type={'pages-with-search'}
          tableConfig={createTableConfig(data.unit)}
          searchableAttributes={searchableAttributes}
          data={depots}
        />
      </div>
    </div>
  );
}