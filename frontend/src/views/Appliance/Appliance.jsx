import React, { Component } from 'react';
import { compose } from 'redux';
import ItemView from '../../components/ItemView/ItemView';
import tabsGenerator from './tabsGenerator';
import props from './props';
import { withProps, withGraphQL, withQuery} from '../../hocs';
import paths from '../../paths';

// TO DO - These values will be passed as props
// Image by <a href="https://pixabay.com/users/TheDigitalArtist-202249/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=686316">Pete Linforth</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=686316">Pixabay</a>
const image = require("../../assets/img/test/appliance2.png");
const imageStatus = 'Funcionando';

class Appliance extends Component {
  render() {
    const { data, graphQLVariables, ...rest } = this.props;
    const finalData = data.queryResponse.nodes[0];
    const descriptionItems = [
      { title: 'Equipamento', description: finalData.name, boldTitle: true },
      { title: 'Código', description: finalData.assetSf, boldTitle: false },
      { title: 'Modelo', description: finalData.model, boldTitle: false },
      { title: 'Fabricante', description: finalData.manufacturer, boldTitle: false },
    ];
    return (
      <ItemView
        sectionName={'Equipamento'}
        sectionDescription={'Ficha descritiva de um equipamento'}
        data={finalData}
        image={image}
        imageStatus={imageStatus}
        //buttonName={"Editar"}
        //buttonPath={paths.appliance.toUpdate + graphQLVariables.id.toString()}
        descriptionItems={descriptionItems}
        tabs={tabsGenerator(data)}
        {...rest}
      />
    );
  }
}

export default compose(
  withProps(props),
  withGraphQL,
  withQuery
)(Appliance);