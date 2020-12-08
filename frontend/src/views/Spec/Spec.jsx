import React, { Component } from 'react';
import { compose } from 'redux';
import ItemView from '../../components/ItemView/ItemView';
import tabsGenerator from './tabsGenerator';
import { withProps, withGraphQL, withQuery } from '../../hocs';
import props from './props';


import { useQuery } from '@apollo/react-hooks';
import { SPEC_QUERY } from './graphql/spec';

const image = require("../../assets/img/test/spec.png");

export default function Spec(props) {
  const specId = Number(props.match.params.id)
  
  const { loading, data } = useQuery(SPEC_QUERY, {
    variables: { specId }
  });
  const spec = !data ? {} : data.allSpecData.nodes[0];

  const imageStatus = spec.totalAvailable == 0 ? 'Item Indisponível' : 'Item Disponível';

  const descriptionItems = [
    { title: 'Suprimento', description: spec.name, boldTitle: true },
    { title: 'Código', description: spec.specSf, boldTitle: false },
    { title: 'Versão', description: spec.version, boldTitle: false },
    { title: 'Disponibilidade', description: `${spec.totalAvailable} ${spec.unit}`, boldTitle: false },
  ];

  return (
    <ItemView
      sectionName={'Especificação Técnica'}
      sectionDescription={'Especificacão técnica de um suprimento'}
      data={spec}
      image={image}
      imageStatus={imageStatus}
      descriptionItems={descriptionItems}
      tabs={tabsGenerator(spec)}
      //buttonName={"Editar"}
      {...props}
    />
  );
}