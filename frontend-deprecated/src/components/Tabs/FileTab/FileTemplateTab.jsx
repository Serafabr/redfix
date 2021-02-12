import React, { Component } from 'react';
import DescriptionTable from '../../Descriptions/DescriptionTable';
import { itemsMatrixFiles } from './utils/descriptionMatrix';
import searchableAttributes from './utils/searchParameters';
import tableConfig from './utils/tableConfig';
import CustomTable from '../../Tables/CustomTable';
import withPrepareData from '../../Formating/withPrepareData';
import withSelectLogic from '../../Selection/withSelectLogic';
import PaneTitle from '../../TabPanes/PaneTitle';
import PaneTextContent from '../../TabPanes/PaneTextContent';
import { compose } from 'redux';
import './FileTemplateTab.css';

class MaintenanceTemplateTab extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="tabpane-container">
        <PaneTitle 
          title={'Lista de Arquivos'}
        />
        <div className="tabpane__content">
          <PaneTextContent 
            numColumns='2' 
            itemsMatrix={itemsMatrixFiles(data)}
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
)(MaintenanceTemplateTab);