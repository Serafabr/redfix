import React, { Component } from 'react';
import DescriptionTable from '../../Descriptions/DescriptionTable';
import { itemsMatrixAssets, itemsMatrixAssetsConfig, itemsMatrixAssetsHierachy } from './utils/descriptionMatrix';
import { customFilters, filterAttributes } from './utils/filterParameters';
import searchableAttributes from './utils/searchParameters';
import tableConfig from './utils/tableConfig';
import CustomTable from '../../Tables/CustomTable';
import withPrepareData from '../../Formating/withPrepareData';
import withSelectLogic from '../../Selection/withSelectLogic';
import { compose } from 'redux';

import PaneTitle from '../../TabPanes/PaneTitle';
import PaneTextContent from '../../TabPanes/PaneTextContent';

class AssetTemplateTab extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className="tabpane-container">
        <PaneTitle 
          title={'Lista de Ativos'}
        />
        <div className="tabpane__content">
          <PaneTextContent 
            numColumns='2' 
            itemsMatrix={itemsMatrixAssetsConfig(data)}
          />
          <CustomTable
            type={'pages-with-search'}
            tableConfig={tableConfig}
            searchableAttributes={searchableAttributes}
            data={data}
          />
        </div>
      </div>
    );
  }
}

export default compose(
  withPrepareData(tableConfig),
  withSelectLogic
)(AssetTemplateTab);