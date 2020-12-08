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

import { PERSONS_QUERY } from './graphql/persons';
import prepareData from '../../components/DataManipulation/prepareData';

export default function Persons(props) {
  const { loading, data } = useQuery(PERSONS_QUERY);
  const persons = data && prepareData(data, tableConfig);
  
  return (
    <AssetCard
      sectionName={"Integrantes"}
      sectionDescription={"Lista de funcionários do CASF"}
      //handleCardButton={() => { console.log("OK") }}
      //buttonName={"Novo integrante"}
    >
      <CustomTable
        type={'full'}
        tableConfig={tableConfig}
        customFilters={customFilters}
        filterAttributes={filterAttributes}
        searchableAttributes={searchableAttributes}
        data={persons}
      />
    </AssetCard>
  );
}