import React, { useState } from 'react';
import Select from 'react-select';
import { Button, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import classNames from 'classnames';
import NumberFormat from 'react-number-format';
import './SupplyForm.css';
import { DEPOT_QUERY } from '../../graphql/depot/queryGQL';
import { TASKS_QUERY } from '../../graphql/task/queryGQL';

import { useQuery, useMutation } from '@apollo/react-hooks';

import { SUPPLIES_QUERY, INSERT_SUPPLY, TASK_SUPPLIES_QUERY } from './graphql/supplyFormGql';

const selectStyles = {
  control: base => ({
    ...base,
    border: "1px solid #e4e7e9",
  }),
};

const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

function AddSupplyForm({ visible, toggleForm, taskId, setAddFormOpen }) {
  const [ contract, setContract ] = useState(null);
  const [ supply, setSupply ] = useState(null);
  const [ quantity, setQuantity ] = useState(null);
  
  const { loading, data } = useQuery(SUPPLIES_QUERY);
  const supplyOptions = loading ? [] : data.allTaskData.nodes[0].supplyOptions;
  
  
  const [insertSupply, { error }] = useMutation(INSERT_SUPPLY, {
    variables: {
      taskId,
      supplyId: supply && supply.supplyId,
      qty: quantity
    },
    onCompleted: () => {
      setContract(null);
      setSupply(null);
      setQuantity(null);
    },
    refetchQueries: [
      { query: TASK_SUPPLIES_QUERY, variables: { taskId } }, 
      { query: DEPOT_QUERY, variables: { depotId: contract && contract.value } },
      { query: TASKS_QUERY },
    ],
    onError: (err) => { console.log(err); },
  });
  
  const depotOptionsSelect = supplyOptions ? supplyOptions.map(option => ({
    value: option.depotId, 
    label: `${option.depotSf.split(/([0-9]+)/)[0]} ${option.depotSf.split(/([0-9]+)/)[1]} - ${option.company}`,
  })) : [];
  
  const supplyOptionsSelect = supplyOptions ? supplyOptions.map(option => ({
    label: `${option.depotSf.split(/([0-9]+)/)[0]} ${option.depotSf.split(/([0-9]+)/)[1]} - ${option.company}`, 
    options: option.supplies.map(supply => ({
      label: `${supply.supplySf}: ${supply.name}`,
      value: supply.supplyId,
      contract: {value: option.depotId, label: `${option.depotSf.split(/([0-9]+)/)[0]} ${option.depotSf.split(/([0-9]+)/)[1]} - ${option.company}`},
      price: supply.price,
      supplySf: supply.supplySf,
      supplyId: supply.supplyId,
      qtyAvailable: supply.qtyAvailable,
      unit: supply.unit
    }))
  })) : [];
  
  const filteredsupplyOptionsSelect = !contract || !supplyOptions ? supplyOptionsSelect : supplyOptionsSelect.filter(option => (option.label === contract.label));
  
  const miniformClass = classNames({
    'miniform-container': true,
  });
  
  function handleChangeContract(contract) {
    setContract(contract);
    setSupply(null);
    setQuantity(null);
  }
  
  function handleChangeSupply(supply) {
    setSupply(supply);
    setQuantity(null);
    if (!contract && supply) {
      setContract(supply.contract);
    }
  }
  
  function handleChangeQuantity(event) {
    setQuantity(parseFloat(event.target.value.replace(/\./g, '').replace(/,/g, '.')));
  }
  
  function handleSubmit() {
    insertSupply();
    setAddFormOpen(false);
  }
  
  return ( 
    <div className={miniformClass}>
        <div className='miniform__field'>
          <div className='miniform__field__label'>
            Adicionar suprimento
          </div>
          <div className='miniform__field__sub-label'>
            Escolha o estoque que será utilizado, e logo em seguida o suprimento.
          </div>
          <div className="miniform__field__input__container">
            <div className='miniform__field__input-half'>
              <Select
                className="basic-single"
                classNamePrefix="select"
                isClearable
                isSearchable
                name="team"
                placeholder={'Estoque (contrato, nota fiscal, ...)'}
                value={contract}
                options={depotOptionsSelect}
                styles={selectStyles}
                onChange={handleChangeContract}
              />
            </div>
            <div className='miniform__field__input-half'>
              <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={'Semac'}
                isClearable
                isSearchable
                name="team"
                placeholder={'Suprimento'}
                value={supply}
                options={filteredsupplyOptionsSelect}
                styles={selectStyles}
                onChange={handleChangeSupply}
              />
            </div>
          </div>
        </div>
        <div className='miniform__field'>
          <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
            <div className="miniform__info__container">
              <div className="miniform__info__label">
                Código do Item
              </div>
              <div className="miniform__info__value">
                {supply ? supply.supplySf : "-"}
              </div>
            </div>
            <div className="miniform__info__container">
              <div className="miniform__info__label">
                Quantidade Disponível
              </div>
              <div className="miniform__info__value" style={{ color: '#f86c6b' }}>
                {supply ? `${supply.qtyAvailable} ${supply.unit}` : "-"}
              </div>
            </div>
            <div className="miniform__info__container">
              <div className="miniform__info__label">
                Preço Unitário
              </div>
              <div className="miniform__info__value">
                {supply ? formatter.format(supply.price) : "-"}
              </div>
            </div>
          </div>
        </div>
        <div className='miniform__field'>
          <div className='miniform__field__label'>
            Quantidade
          </div>
          <div className='miniform__field__sub-label'>
            Indique a quantidade utilizada. **Atenção com a unidade de medida.
          </div>
          <div className="miniform__field__input__container">
            <div className='miniform__field__input-half'>
              <InputGroup>
                <NumberFormat 
                  className='form-control miniform__field__textarea'
                  thousandSeparator={'.'} 
                  decimalSeparator={','}
                  style={{ textAlign: 'right' }} 
                  placeholder='0,00'
                  decimalScale='2'
                  value={quantity}
                  fixedDecimalScale={true}
                  onChange={handleChangeQuantity}
                />
                <InputGroupAddon addonType="append">
                  <InputGroupText>{supply ? supply.unit  : "-"}</InputGroupText>
                </InputGroupAddon>
               </InputGroup>
            </div>
            <div className='miniform__field__input-half'>
              <div className="miniform__info__label" style={{ textAlign: 'center' }}>
                Valor Total
              </div>
              <div className="miniform__info__value">
                {supply ? formatter.format(supply.price * quantity) : "-"}
              </div>
            </div>
          </div>
        </div>
        <div className='miniform__buttons'>
          <Button 
            color="success" 
            size="sm" 
            style={{ marginRight: "10px" }}
            onClick={handleSubmit}
          >
            Adicionar Item
          </Button>
          <Button 
            color="secondary" 
            size="sm" 
            style={{ marginRight: "10px" }}
            onClick={toggleForm}
          >
            Limpar
          </Button>
          <Button 
            color="danger" 
            size="sm"
            onClick={toggleForm}
          >
            Voltar
          </Button>
        </div>
      </div>
   );
}
 
export default AddSupplyForm;