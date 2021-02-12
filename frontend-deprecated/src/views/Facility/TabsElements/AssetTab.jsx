import React, { Component } from 'react';
import AssetTemplateTab from '../../../components/Tabs/AssetTab/AssetsTemplateTab';

class AssetTab extends Component {
  render() {
    const data = Object.values(this.props.data.relations || []);
    const finalData = [].concat(...data);

    return (
      <>
        <AssetTemplateTab
          data={finalData}
          isHierarchyAssets={true}
        />
      </>
    );
  }
}

export default AssetTab;