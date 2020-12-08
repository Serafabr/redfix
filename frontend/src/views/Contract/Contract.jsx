import React, { Component } from 'react';
import { compose } from 'redux';
import ItemView from '../../components/ItemView/ItemView';
import tabsGenerator from './tabsGenerator';
import { withProps, withGraphQL, withQuery } from '../../hocs';
import props from './props';
import moment from 'moment';
import 'moment/locale/pt-br';

import { useQuery } from '@apollo/react-hooks';
import { DEPOT_QUERY } from './graphql/depot';

const image = require("../../assets/img/test/depot.png");
const imageStatus = 'Vigente';

function Contract(props) {
  const depotId = Number(props.match.params.id)
  const { loading, data } = useQuery(DEPOT_QUERY, {
    variables: {
      depotId,
    }
  });
  const depot = loading ? {} : data.allDepotData.nodes[0];
  
  const endDateDisplay = depot.dateEnd ? (
    <span style={{ color: '#b10000', fontWeight: '700' }}>
      <span style={{ textTransform: 'capitalize'  }}>{moment(depot.dateEnd).format("dddd, DD MMM YYYY")}</span>
    </span>
  ) : (
    <span>
      Estoque sem data final
    </span>
  );

  const descriptionItems = [
    { title: 'Objeto', description: depot.title, boldTitle: true },
    { title: 'Identificação', description: depot.depotSf, boldTitle: false },
    { title: 'Vigente até', description: endDateDisplay, boldTitle: false },
    { title: 'Empresa', description: depot.company, boldTitle: false },
  ];
  return (
    <ItemView
      sectionName={`Estoque - ${depot.depotSf}`}
      sectionDescription={'Ficha descritiva de um estoque'}
      data={depot}
      image={image}
      imageStatus={imageStatus}
      descriptionItems={descriptionItems}
      tabs={tabsGenerator(depot)}
      //buttonName={"Editar"}
      {...props}
    />
  );
}

export default Contract;