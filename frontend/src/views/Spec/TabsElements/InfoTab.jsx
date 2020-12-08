import React, { Component } from 'react';
import { itemsMatrixGeneral } from '../utils/descriptionMatrix';
import PaneTitle from '../../../components/TabPanes/PaneTitle';
import PaneTextContent from '../../../components/TabPanes/PaneTextContent';

class InfoTab extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="tabpane-container">
        <PaneTitle 
          title={'Especificações Técnicas'}
        />
        <div className="tabpane__content">
          <PaneTextContent 
            numColumns='2' 
            itemsMatrix={itemsMatrixGeneral(data)}
          />
        </div>
      </div>
    );
  }
}

export default InfoTab;