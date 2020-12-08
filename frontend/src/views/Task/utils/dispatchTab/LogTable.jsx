import React, { Component } from 'react';
import CustomTable from '../../../../components/Tables/CustomTable';
import { compose } from 'redux';

import withPrepareData from '../../../../components/Formating/withPrepareData';
import withSelectLogic from '../../../../components/Selection/withSelectLogic';

import searchableAttributes from './searchParameters';

import tableConfig from './tableConfig';

class LogTable extends Component {
  state = {  }
  render() { 
    return ( 
      <CustomTable
        type={'pages-with-search'}
        tableConfig={tableConfig}
        searchableAttributes={searchableAttributes}
        selectedData={this.props.selectedData}
        handleSelectData={this.props.handleSelectData}
        data={this.props.data}
        disableSorting
      />
     );
  }
}

export default compose(
  withPrepareData(tableConfig),
  withSelectLogic
)(LogTable);