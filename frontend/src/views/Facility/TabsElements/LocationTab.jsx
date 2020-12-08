import React, { Component } from 'react';
import DescriptionTable from '../../../components/Descriptions/DescriptionTable';
import './Tabs.css';

import PaneTitle from '../../../components/TabPanes/PaneTitle';

class LocationTab extends Component {
  state = {}
  render() {
    return (
      <div className="tabpane-container">
        <PaneTitle 
          title={'Planta Arquitetônica'}
        />
        <div className="asset-info-content">
          <div className="asset-info-map"></div>
        </div>
      </div>
    );
  }
}

export default LocationTab;