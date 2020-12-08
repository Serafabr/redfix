import React, { Component } from 'react';
import tableConfig from './utils/tableConfig';
import { customFilters, filterAttributes } from './utils/filterParameters';
import searchableAttributes from './utils/searchParameters';
import { compose } from 'redux';
import props from './props';
import { withProps, withGraphQL, withQuery } from '../../hocs';
import withSelectLogic from '../../components/Selection/withSelectLogic';
import { withRouter } from "react-router-dom";
import withPrepareData from '../../components/Formating/withPrepareData';
import withDataAccess from './utils/withDataAccess';
import CustomTable from '../../components/Tables/CustomTable';
import AssetCard from '../../components/Cards/AssetCard';

import { useQuery } from '@apollo/react-hooks';

import { TEAMS_QUERY } from './graphql/teams';
import prepareData from '../../components/DataManipulation/prepareData';

export default function Appliances(props) {
  const { loading, data } = useQuery(TEAMS_QUERY);
  const teams = data  ? prepareData(data.allTeamData.nodes, tableConfig) : [];
  
  console.log("Teams: ", teams);
  
  return (
    <div style={{ maxWidth: '1100px', margin: "0 auto" }}>
      <AssetCard
        sectionName={"Equipes"}
        sectionDescription={"Lista de equipes do CASF"}
        //handleCardButton={() => { console.log("Nova Equipe") }}
        //buttonName={"Nova Equipe"}
      >
        <CustomTable
          type={'full'}
          tableConfig={tableConfig}
          customFilters={customFilters}
          filterAttributes={filterAttributes}
          searchableAttributes={searchableAttributes}
          data={teams}
        />
      </AssetCard>
    </div>
  );
}