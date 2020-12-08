import React, { Component } from 'react';
import DescriptionTable from '../../../components/Descriptions/DescriptionTable';
import { itemsMatrixGeneral, itemsMatrixManufacturer, itemsMatrixParent } from '../utils/descriptionMatrix';

import PaneTitle from '../../../components/TabPanes/PaneTitle';
import PaneTextContent from '../../../components/TabPanes/PaneTextContent';

class InfoTab extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="tabpane-container">
        <PaneTitle 
          title={'Especificações'}
        />
        <div className="tabpane__content">
          <PaneTextContent 
            numColumns='2' 
            itemsMatrix={itemsMatrixGeneral(data)}
          />
        </div>
        <PaneTitle 
          title={'Fabricante'}
        />
        <div className="tabpane__content">
          <PaneTextContent 
            numColumns='2' 
            itemsMatrix={itemsMatrixManufacturer(data)}
          />
        </div>
        <PaneTitle 
          title={'Ativo Pai'}
        />
        <div className="tabpane__content">
          <PaneTextContent 
            numColumns='2' 
            itemsMatrix={itemsMatrixParent(data)}
          />
        </div>
      </div>
    );
  }
}

export default InfoTab;