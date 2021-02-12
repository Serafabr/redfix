import React, { Component } from 'react';
import { compose } from 'redux';
import ItemView from '../../components/ItemView/ItemView';
import tabsGenerator from './tabsGenerator';
import paths from '../../paths';
import { withProps, withGraphQL, withQuery } from '../../hocs';
import props from './props';

const image = require("../../assets/img/test/facilities_picture.jpg");
const imageStatus = 'Trânsito Livre';

class Facility extends Component {
  render() {
    const { data, graphQLVariables, ...rest } = this.props;
    const finalData = data.queryResponse.nodes[0];

    const descriptionItems = [
      { title: 'Edifício', description: finalData.name, boldTitle: true },
      { title: 'Código', description: finalData.assetSf, boldTitle: false },
      { title: 'Departamento(s)', description: finalData.department, boldTitle: true },
      { title: 'Área', description: finalData.area, boldTitle: true },
    ];
    return (
      <ItemView
        sectionName={'Edifício'}
        sectionDescription={'Ficha descritiva de uma área/edifício'}
        data={finalData}
        image={image}
        imageStatus={imageStatus}
        descriptionItems={descriptionItems}
        tabs={tabsGenerator(finalData)}
        //buttonName={'Editar'}
        //buttonPath={paths.facility.toUpdate + graphQLVariables.id.toString()}
        {...rest}
      />
    );
  }
}

export default compose(
  withProps(props),
  withGraphQL,
  withQuery
)(Facility);