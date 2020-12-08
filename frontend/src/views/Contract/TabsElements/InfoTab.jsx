import React, { Component } from 'react';
import DescriptionTable from '../../../components/Descriptions/DescriptionTable';
import { itemsMatrixGeneral, itemsMatrixDate } from '../utils/descriptionMatrix';
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
          title={'Prazos e Datas'}
        />
        <div className="tabpane__content">
          <PaneTextContent 
            numColumns='2' 
            itemsMatrix={itemsMatrixDate(data)}
          />
        </div>
      </div>
    );
  }
}

export default InfoTab;