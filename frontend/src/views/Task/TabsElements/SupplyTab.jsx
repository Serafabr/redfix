import React, { useState } from 'react';
import { itemsMatrixSupply, itemsMatrixTableFilter } from '../utils/supplyTab/descriptionMatrix';
import tableConfig from '../utils/supplyTab/tableConfig';
import searchableAttributes from '../utils/supplyTab/searchParameters';
import CustomTable from '../../../components/Tables/CustomTable';

import AnimateHeight from 'react-animate-height';
import AddSupplyForm from '../../../components/NewForms/AddSupplyForm';
import EditSupplyForm from '../../../components/NewForms/EditSupplyForm';

import PaneTitle from '../../../components/TabPanes/PaneTitle';
import PaneTextContent from '../../../components/TabPanes/PaneTextContent';
import prepareData from '../../../components/DataManipulation/prepareData';

import './Tabs.css';

function SupplyTab({ data }) {
  const [ addFormOpen, setAddFormOpen ] = useState(false);
  const [ editFormOpen, setEditFormOpen ] = useState(false);
  const [ contractFilterId, setContractFilterId ] = useState(null);
  
  const notFilteredSupplies = prepareData(data.supplies, tableConfig);
 
  const supplies = contractFilterId ? notFilteredSupplies.filter(supply => supply.contractId === contractFilterId) : notFilteredSupplies;
  
  function handleSetContractFilter({target}) {
    setContractFilterId(parseInt(target.value));
  }
  
  function toggleAddForm() {
    setAddFormOpen(!addFormOpen);
    setEditFormOpen(false);
  }

  function toggleEditForm() {
    setEditFormOpen(!editFormOpen);
    setAddFormOpen(false);
  }

  const actionButtons = {
    editFormOpen: [
      {name: 'Salvar', color: 'success', onClick: toggleEditForm},
      {name: 'Cancelar', color: 'danger', onClick: toggleEditForm}
    ],
    addFormOpen: [
      {name: 'Voltar', color: 'danger', onClick: toggleAddForm}
    ],
    noFormOpen: [
      {name: 'Adicionar Suprimentos', color: 'primary', onClick: toggleAddForm},
      {name: 'Alterar Suprimentos', color: 'success', onClick: toggleEditForm},
    ],
  };

  const openedForm = addFormOpen ? 'addFormOpen' : (editFormOpen ? 'editFormOpen' : 'noFormOpen');
  const heightAdd = openedForm === 'addFormOpen' ? 'auto' : 0;
  const heightEdit = openedForm === 'editFormOpen' ? 'auto' : 0;

  return (
    <>
      <div className="tabpane-container">
        <PaneTitle 
          actionButtons={actionButtons[openedForm]}
          title={addFormOpen ? 'Adicionar novo suprimento' : (editFormOpen ? 'Alterar suprimentos' : 'Tabela de suprimentos')}
        />
        <AnimateHeight 
          duration={heightAdd === "auto" ? 300 : 0}
          height={heightAdd}
        >
          <div className="tabpane__content">
            <AddSupplyForm 
              visible={true}
              toggleForm={toggleAddForm}
              setAddFormOpen={setAddFormOpen}
              taskId={data.taskId}
            />
          </div>
        </AnimateHeight>
        <AnimateHeight 
          duration={heightEdit === "auto" ? 300 : 0}
          height={heightEdit}
        >
          <div className="tabpane__content">
            <EditSupplyForm 
              visible={true}
              toggleForm={toggleEditForm}
              taskId={data.taskId}
              supplies={data.supplies}
            />
          </div>
        </AnimateHeight>
        {(addFormOpen || editFormOpen) && (
          <PaneTitle 
            title={'Tabela de Suprimentos'}
          />
        )}
        {/* <div className="tabpane__content">
          <PaneTextContent 
            numColumns='2' 
            itemsMatrix={itemsMatrixSupply(data)}
          />
        </div>
        <PaneTitle 
          title={'Tabela de suprimentos'}
        /> */}
        <div className="tabpane__content">
          <PaneTextContent 
            numColumns='2' 
            itemsMatrix={itemsMatrixTableFilter(data, handleSetContractFilter)}
          />
        </div>
        <div className="tabpane__content__table">
          <CustomTable
            type={'pages-with-search'}
            tableConfig={tableConfig}
            searchableAttributes={searchableAttributes}
            data={supplies}
            disableSorting
          />
        </div>
      </div>
    </>
  );
}

export default SupplyTab;