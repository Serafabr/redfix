import React, { Component } from 'react';
import AssetCard from '../Cards/AssetCard';
import ItemDescription from './ItemDescription';
import TabContainer from '../../components/Tabs/TabContainer';

export default class ItemViewUI extends Component {
  state = {}
  render() {
    const { data, descriptionItems, image, imageStatus, tabs, buttonName, handleCardButton, sectionName, sectionDescription } = this.props;
    return (
      <div className="asset-container">
        <AssetCard
          sectionName={sectionName}
          sectionDescription={sectionDescription}
          handleCardButton={handleCardButton}
          buttonName={buttonName}
        >
          <ItemDescription
            image={image}
            status={imageStatus}
            descriptionItems={descriptionItems}
          />
          <TabContainer
            name={'FacilityTabs'}
            tabs={tabs}
          />
        </AssetCard>
      </div>
    );
  }
}