import React, { Component } from 'react';
import DescriptionTable from '../../../components/Descriptions/DescriptionTable';
import { itemsMatrixMaterial } from '../utils/descriptionMatrix';
import tableConfig from '../utils/materialTab/tableConfig';
import { customFilters, filterAttributes } from '../utils/materialTab/filterParameters';
import searchableAttributes from '../utils/materialTab/searchParameters';
import withDataAccess from '../utils/materialTab/withDataAccess';
import CustomTable from '../../../components/Tables/CustomTable';
import withPrepareData from '../../../components/Formating/withPrepareData';
import withSelectLogic from '../../../components/Selection/withSelectLogic';
import PaneTitle from '../../../components/TabPanes/PaneTitle';
import PaneTextContent from '../../../components/TabPanes/PaneTextContent';
import prepareData from '../../../components/DataManipulation/prepareData';
import { compose } from 'redux';
import './Tabs.css';

function MaterialTab({
  data,
}) {

  const currentBox = data.boxes ? (data.boxes.filter(box => (box.boxId == data.boxId))[0] || {}) : {};
  const supplies = prepareData(currentBox.supplies, tableConfig);

  return (
    <div className="tabpane-container">
      <PaneTitle 
        title={'Lista de Materiais e Serviços'}
      />
      <div className="tabpane__content">
        <PaneTextContent 
          numColumns='3' 
          itemsMatrix={itemsMatrixMaterial(supplies)}
        />
        <CustomTable
          type={'pages-with-search'}
          tableConfig={tableConfig}
          searchableAttributes={searchableAttributes}
          data={supplies}
        />
      </div>
    </div>
  );
}

export default MaterialTab;