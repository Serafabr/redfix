import React, { useState } from 'react';
import { Button, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import Select, { createFilter } from 'react-select';
import './AssetForm.css';
import { List } from 'react-virtualized';
import { useQuery, useMutation } from '@apollo/react-hooks';

import { ALL_ASSETS_QUERY, INSERT_ASSET, TASK_ASSETS_QUERY, REMOVE_ASSET } from './graphql/assetFormGql';

const selectStyles = {
  control: base => ({
    ...base,
    border: "1px solid #e4e7e9",
  }),
};

function MenuList({ children }) {
  const rows = children;
  const rowRenderer = ({ key, index, isScrolling, isVisible, style }) => (
    <div key={key} style={style}>{rows[index]}</div>
  )
  
  return (
    <List 
      style={{ width: '100%' }}
      width={600}
      height={300}
      rowHeight={35}
      rowCount={rows.length || 0}
      rowRenderer={rowRenderer}
    />
  );
}

function EditAssetForm({ assets, insertAsset, deleteAsset, cleanAssets }) {
  const [ assetOptions, setAssetOptions ] = useState([]);
  const [ selectedAsset, setSelectedAsset ] = useState(null);
  
  const { loading } = useQuery(ALL_ASSETS_QUERY, {
    onCompleted: ({ allTaskData: { nodes: [{ assetOptions }]}}) => {
      const assetsSelect = assetOptions.map(asset => ({
        value: asset.assetId, 
        label: `${asset.assetSf}: ${asset.name}`,
        assetSf: asset.assetSf,
        name: asset.name,
        assetId: asset.assetId
      }));
      setAssetOptions(assetsSelect);
    }
  });
  
  function handleSelectAsset(asset) {
    setSelectedAsset(asset);
  }
  
  function handleInsertAsset() {
    if (selectedAsset) {
      insertAsset(selectedAsset);
      setSelectedAsset(null);
    }
  }
  
  function handleDeleteAsset(assetId) {
    deleteAsset(assetId);
    setSelectedAsset(null);
  }
  
  function handleCleanAssets() {
    cleanAssets();
    setSelectedAsset(null);
  }
  
  return ( 
    <div className={'miniform-container'}>
      <div className='miniform__field'>
          <div className='miniform__field__label'>
            Adicionar ativo
          </div>
          <div className='miniform__field__sub-label'>
            Ao incluir um novo ativo, ele será vinculado imediatamente a esta tarefa
          </div>
          <div className="miniform__field__input__container">
            <div className='miniform__field__input' style={{ width: '80%' }}>
              <Select
                className="basic-single"
                classNamePrefix="select"
                isClearable
                isSearchable
                name="assets"
                components={{ MenuList }}
                placeholder={'Edifício / Equipamento'}
                value={selectedAsset}
                filterOption={createFilter({ ignoreAccents: false })}
                options={assetOptions}
                styles={selectStyles}
                onChange={handleSelectAsset}
              />
            </div>
            <div className='miniform__buttons-inline'>
              <Button 
                color="primary" 
                size="sm" 
                onClick={handleInsertAsset}
              >
                Incluir Ativo
              </Button>
            </div>
          </div>
        </div>
        <div className='miniform__field'>
          <div className='miniform__field__label'>
            Lista de ativos
          </div>
          <div className='miniform__field__sub-label'>
            Lista dos ativos vinculados a essa tarefa
          </div>
          {assets.length > 0 ? assets.map(asset => (
            <div className='miniform__field__item'>
              <div className='miniform__field__edit-supply' style={{width: '25%'}}>
                <Input value={asset.assetSf} style={{ backgroundColor: "white" }} disabled/>
              </div>
              <div className='miniform__field__edit-supply' style={{width: '60%'}}>
                <Input value={asset.name} style={{ backgroundColor: "white" }}  disabled/>
              </div>
              <div style={{width: '15%', textAlign: 'center'}}>
                <Button outline color="danger" size="sm" onClick={() => {handleDeleteAsset(asset.assetId)}}>Exlcuir</Button>
              </div>
            </div>
          )) : (
            <div className="miniform__no-assets-label">
              Tarefa sem ativos.
            </div>
          )}
        </div>
          <div className='miniform__buttons'>
            <Button 
              color="warning" 
              size="sm"
              onClick={handleCleanAssets}
            >
              Limpar
            </Button>
          </div>
      </div>
   );
}
 
export default EditAssetForm;