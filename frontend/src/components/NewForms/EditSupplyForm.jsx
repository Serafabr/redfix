import React, { useState, useEffect } from 'react';
import { Button, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import classNames from 'classnames';
import NumberFormat from 'react-number-format';
import './SupplyForm.css';
import { DEPOT_QUERY } from '../../graphql/depot/queryGQL';
import { TASKS_QUERY } from '../../graphql/task/queryGQL';

import { useMutation } from '@apollo/react-hooks';

import { MODIFY_SUPPLY, TASK_SUPPLIES_QUERY } from './graphql/supplyFormGql';

function EditSupplyForm({ visible, toggleForm, taskId, supplies}) {
  const [ formSupplies, setFormSupplies ] = useState(supplies || []);
  
  console.log("Supplies: ", supplies);
  
  useEffect(() => {
    setFormSupplies(supplies || []);
  }, [supplies])
  
  const suppliesForUpdate = formSupplies.map(({ supplyId, qty }) => ({
    taskId,
    supplyId,
    qty
  }))
  
  const [modifySupply, { error }] = useMutation(MODIFY_SUPPLY, {
    variables: {
      taskId,
      supplies: suppliesForUpdate,
    },
    onCompleted: () => {
    },
    refetchQueries: [
      { query: TASK_SUPPLIES_QUERY, variables: { taskId } }, 
      ...supplies.map(supply => ({ query: DEPOT_QUERY, variables: { depotId: supply.depotId } })),
      // { query: DEPOT_BOXES_QUERY, variables: { boxId: 1 } },
      { query: TASKS_QUERY },
    ],
    onError: (err) => { console.log(err); },
  });
  
  const miniformClass = classNames({
    'miniform-container': true,
    'miniform-disabled': !visible
  });
  
  function handleChangeQuantity({ target }) {
    const  newSupplies = formSupplies.map(supply => {
      if (supply.supplyId == target.id) {
        return {...supply, qty: parseFloat(target.value.replace(/\./g, '').replace(/,/g, '.'))};
      }
      return {...supply};
    });
    setFormSupplies(newSupplies);
  }
  
  function handleRemoveSupply(supplyId) {
    const newSupplies = formSupplies.filter(supply => supply.supplyId != supplyId);
    setFormSupplies([...newSupplies]);
  }
  
  function handleCancel() {
    toggleForm();
    setFormSupplies(supplies);
  }
  
  function handleSubmit() {
    toggleForm();
    modifySupply();
  }
  
  
  return ( 
    <div className={miniformClass}>
        <div className='miniform__field'>
          <div className='miniform__field__label'>
            Alterar ou exlcuir suprimento
          </div>
          <div className='miniform__field__sub-label'>
            Ao salvar, os itens alterados na lista abaixo serão gravados na tabela de suprimentos.
          </div>
          {formSupplies.map(supply => (
            <div className={'miniform__box__item'}>
              <div className='miniform__field__item'>
                <div className='miniform__field__edit-supply' style={{width: '50%'}}>
                  <Input value={`${supply.depotSf} - ${supply.company}`} style={{ backgroundColor: "#f1f1f1" }} disabled/>
                </div>
                <div className='miniform__field__edit-supply' style={{width: '50%'}}>
                  <Input value={supply.name} style={{ backgroundColor: "#f1f1f1" }} disabled/>
                </div>
              </div>
              <div className='miniform__field__item'>
                <div className='miniform__field__edit-supply' style={{ width: '50%'}}>
                  <InputGroup>
                    <NumberFormat 
                      id={supply.supplyId}
                      className='form-control miniform__field__textarea'
                      thousandSeparator={'.'} 
                      decimalSeparator={','}
                      style={{ textAlign: 'right' }} 
                      placeholder='0,00'
                      decimalScale='2'
                      value={supply.qty}
                      fixedDecimalScale={true}
                      onChange={handleChangeQuantity}
                    />
                    <InputGroupAddon addonType="append" style={{ minWidth: '40%' }}>
                      <InputGroupText style={{ justifyContent: 'left', overflow: 'hidden', width: '100%' }}>{supply ? supply.unit  : "-"}</InputGroupText>
                    </InputGroupAddon>
                   </InputGroup>
                </div>
                <div className="miniform__field__remove-container">
                  <Button outline color="danger" size="sm" onClick={() => {handleRemoveSupply(supply.supplyId)}}>Exlcuir</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='miniform__buttons'>
          <Button 
            color="success" 
            size="sm" 
            style={{ marginRight: "10px" }}
            onClick={handleSubmit}
          >
            Salvar
          </Button>
          <Button 
            color="danger" 
            size="sm"
            onClick={handleCancel}
          >
            Cancelar
          </Button>
        </div>
      </div>
   );
}
 
export default EditSupplyForm;