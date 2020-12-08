import React, { Component } from 'react';
import DescriptionTable from '../../Descriptions/DescriptionTable';
import { itemsMatrixReport, itemsMatrixMaintenance } from './utils/descriptionMatrix';
import { customFilters, filterAttributes } from './utils/filterParameters';
import searchableAttributes from './utils/searchParameters';
import tableConfig from './utils/tableConfig';
import CustomTable from '../../Tables/CustomTable';
import withPrepareData from '../../Formating/withPrepareData';
import withSelectLogic from '../../Selection/withSelectLogic';
import { compose } from 'redux';

import PaneTitle from '../../TabPanes/PaneTitle';
import PaneTextContent from '../..//TabPanes/PaneTextContent';

class MaintenanceTemplateTab extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="tabpane-container">
        <PaneTitle 
          title={'Tabela de Manutenções'}
        />
        <div className="tabpane__content">
          <PaneTextContent 
            numColumns='2' 
            itemsMatrix={itemsMatrixMaintenance(data)}
          />
          <CustomTable
            type={'pages-with-search'}
            tableConfig={tableConfig}
            searchableAttributes={searchableAttributes}
            data={data}
          />
        </div>
        {/* <DescriptionTable
          title={'Relatório de Manutenções'}
          numColumns={2}
          itemsMatrix={itemsMatrixReport(data)}
        />
        <DescriptionTable
          title={'Tabela de Manutenções'}
          numColumns={2}
          itemsMatrix={itemsMatrixMaintenance(data)}
        /> */}
      </div>
    );
  }
}

export default compose(
  withPrepareData(tableConfig),
  withSelectLogic
)(MaintenanceTemplateTab);