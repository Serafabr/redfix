import React, { Component } from 'react';
import tableConfig from './utils/tableConfig';
import { customFilters, filterAttributes } from './utils/filterParameters';
import searchableAttributes from './utils/searchParameters';
import { compose } from 'redux';
import { withProps, withGraphQL, withQuery } from '../../hocs';
import props from './props';
import withSelectLogic from '../../components/Selection/withSelectLogic';
import { withRouter } from "react-router-dom";
import withPrepareData from '../../components/Formating/withPrepareData';
import withDataAccess from './utils/withDataAccess';
import CustomTable from '../../components/Tables/CustomTable';
import AssetCard from '../../components/Cards/AssetCard';

import { useQuery } from '@apollo/react-hooks';
import { DEPOTS_QUERY } from './graphql/depots';

import prepareData from '../../components/DataManipulation/prepareData';

function Contracts(props) {
  
  const { loading, data } = useQuery(DEPOTS_QUERY);
  const depots = !data ? [] : prepareData(data.allDepotData.nodes, tableConfig);
  
  return (
    <div style={{ maxWidth: '1100px', margin: "0 auto" }}>
      <AssetCard
        sectionName={"Estoques"}
        sectionDescription={"Estoques de suprimentos de engenharia"}
        //handleCardButton={() => { console.log("OK") }}
        //buttonName={"Novo Estoque"}
      >
        <CustomTable
          type={'full'}
          tableConfig={tableConfig}
          customFilters={customFilters}
          filterAttributes={filterAttributes}
          searchableAttributes={searchableAttributes}
          data={depots}
        />
      </AssetCard>
    </div>
  );
}

export default Contracts;