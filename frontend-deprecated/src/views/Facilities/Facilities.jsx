import React, { Component } from 'react';
import tableConfig from './utils/tableConfig';
import { customFilters, filterAttributes } from './utils/filterParameters';
import searchableAttributes from './utils/searchParameters';
import { compose } from 'redux';
import CustomTable from '../../components/Tables/CustomTable';
import AssetCard from '../../components/Cards/AssetCard';
import props from './props';
import paths from '../../paths';
import { withProps, withQuery, withGraphQL } from '../../hocs';
import withSelectLogic from '../../components/Selection/withSelectLogic';
import { withRouter } from "react-router-dom";
import withPrepareData from '../../components/Formating/withPrepareData';
import withDataAccess from './utils/withDataAccess';

class Facilities extends Component {
  render() {
    return (
      <div style={{ maxWidth: '1100px', margin: "0 auto" }}>
        <AssetCard
          sectionName={"Edifícios"}
          sectionDescription={"Lista de áreas do CASF"}
          //handleCardButton={() => { this.props.history.push(paths.facility.create) }}
          //buttonName={"Nova área"}
        >
          <CustomTable
            type={'full'}
            tableConfig={tableConfig}
            customFilters={customFilters}
            filterAttributes={filterAttributes}
            searchableAttributes={searchableAttributes}
            selectedData={this.props.selectedData}
            handleSelectData={this.props.handleSelectData}
            data={this.props.data}
          />
        </AssetCard>
      </div>
    );
  }
}

export default compose(
  withProps(props),
  withGraphQL,
  withQuery,
  withDataAccess,
  withPrepareData(tableConfig),
  withRouter,
  withSelectLogic
)(Facilities);