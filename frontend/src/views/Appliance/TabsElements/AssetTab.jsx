import React, { Component } from 'react';
import AssetTemplateTab from '../../../components/Tabs/AssetTab/AssetsTemplateTab';

class AssetTab extends Component {
  render() {
    const data = Object.values(this.props.data.relations || []);
    const final_data = [].concat(...data);

    return (
      <>
        <AssetTemplateTab
          data={final_data}
          isHierarchyAssets={true}
        />
      </>
    );
  }
}

export default AssetTab;