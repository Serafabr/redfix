import React, { Component } from 'react';
// import DescriptionTable from '../../../../components/Descriptions/DescriptionTable';
// import { itemsMatrixAssets } from '../utils/descriptionMatrix';
import tableConfig from '../utils/assetTab/tableConfig';
// import { customFilters, filterAttributes } from '../utils/assetTab/filterParameters';
import searchableAttributes from '../utils/assetTab/searchParameters';
// import TableFilter from '../../../../components/Tables/CustomTable/TableFilter';
import AssetTemplateTab from '../../../components/Tabs/AssetTab/AssetsTemplateTab';
import { itemsMatrixAssets } from '../utils/assetTab/descriptionMatrix';

import withPrepareData from '../../../components/Formating/withPrepareData';
import withSelectLogic from '../../../components/Selection/withSelectLogic';
import CustomTable from '../../../components/Tables/CustomTable';

import AnimateHeight from 'react-animate-height';
import EditAssetForm from '../../../components/NewForms/EditAssetForm';

import PaneTitle from '../../../components/TabPanes/PaneTitle';
import PaneTextContent from '../../../components/TabPanes/PaneTextContent';

import { compose } from 'redux';

import './Tabs.css';

class AssetTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editFormOpen: false,
    }
    this.toggleEditForm = this.toggleEditForm.bind(this);
  }

  toggleEditForm() {
    this.setState(prevState => ({
      editFormOpen: !prevState.editFormOpen,
    }));
  }

  render() {
    const data = this.props.data.assets;
    const { editFormOpen } = this.state;

    const actionButtons = {
      editFormOpen: [
        {name: 'Voltar', color: 'danger', onClick: this.toggleEditForm}
      ],
      noFormOpen: [
        {name: 'Alterar Ativos', color: 'success', onClick: this.toggleEditForm},
      ],
    };

    const heightEdit = editFormOpen === true ? 'auto' : 0;

    return (
      <>
        <div className="tabpane-container">
          <PaneTitle 
            actionButtons={editFormOpen ? actionButtons.editFormOpen : actionButtons.noFormOpen}
            title={editFormOpen ? 'Alterar ativos' : 'Tabela de ativos'}
          />
          <AnimateHeight 
            duration={300}
            height={heightEdit}
          >
            <div className="tabpane__content">
              <EditAssetForm 
                toggleForm={this.toggleEditForm}
                assets={data}
                taskId={this.props.data.taskId}
              />
            </div>
          </AnimateHeight>
          {(editFormOpen) && (
            <PaneTitle 
              title={'Tabela de Ativos'}
            />
          )}
          <div className="tabpane__content">
            <PaneTextContent 
              numColumns='2' 
              itemsMatrix={itemsMatrixAssets(data)}
            />
          </div>
          <div className="tabpane__content__table">
            <CustomTable
              type={'pages-with-search'}
              tableConfig={tableConfig}
              searchableAttributes={searchableAttributes}
              selectedData={this.props.selectedData}
              handleSelectData={this.props.handleSelectData}
              data={data}
              disableSorting
            />
          </div>
        </div>
      </>
    );
  }
}

export default compose(
  withPrepareData(tableConfig),
  withSelectLogic
)(AssetTab);