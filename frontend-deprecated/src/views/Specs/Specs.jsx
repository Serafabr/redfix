import React, { Component } from 'react';
import tableConfig from './utils/tableConfig';
import { customFilters, filterAttributes } from './utils/filterParameters';
import searchableAttributes from './utils/searchParameters';
import CustomTable from '../../components/Tables/CustomTable';
import AssetCard from '../../components/Cards/AssetCard';

import { useQuery } from '@apollo/react-hooks';

import { SPECS_QUERY } from './graphql/specs';
import prepareData from '../../components/DataManipulation/prepareData';

export default function Specs(props) {
  const { loading, data } = useQuery(SPECS_QUERY);
  const specs = data ? prepareData(data.allSpecData.nodes, tableConfig) : [];

  return (
    <div style={{ maxWidth: '1100px', margin: "0 auto" }}>
      <AssetCard
        sectionName={"Especificações Técnicas"}
        sectionDescription={"Lista de especificações técnicas"}
        //handleCardButton={() => { console.log("Hei!"); }}
        //buttonName={"Novo Item"}
      >
        <CustomTable
          type={'full'}
          tableConfig={tableConfig}
          customFilters={customFilters}
          filterAttributes={filterAttributes}
          searchableAttributes={searchableAttributes}
          data={specs}
        />
      </AssetCard>
    </div>
  );
}