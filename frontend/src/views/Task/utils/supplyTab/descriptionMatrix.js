import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export function itemsMatrixSupply(data) {
  const contracts = {};
  const supplies = data.supplies || [];
  
  console.log("Supppplies: ", supplies);
  
  supplies.forEach((item) => {
    if (!(item.depotId in contracts)) {
      contracts[item.depotId] = {
        id: item.depotId,
        name: item.depotSf,
        company: item.company,
        cost: item.totalPrice
      }
    } else {
      contracts[item.depotId].cost += item.totalPrice
    }
  })
  
  
  return (
    [
      [
        { 
          id: 'taskValue', title: 'Custo total da tarefa', 
          description: formatter.format(supplies.reduce((acc, item) => (item.totalPrice + acc), 0)), 
          span: 1 
        },
      ],
      [
        { id: 'taskValuePerStorage', 
          title: 'Custo por "estoque"', 
          description: (supplies.length === 0 ? (
            <div>Sem suprimentos cadastrados</div>
          ) : (
            <ul style={{ paddingLeft: '20px', marginBottom: '0' }}>
              {Object.keys(contracts).map(contractId => (
                 <li key={contractId}>{contracts[contractId].name} - {contracts[contractId].company}: <span style={{fontWeight: '600'}}>{formatter.format(contracts[contractId].cost)}</span></li>
              ))}
            </ul>
          )), 
          span: 2 
        },
      ],
    ]
  );
}

export function itemsMatrixTableFilter(data, handleSetContractFilter) {
  const contracts = {};
  const supplies = data.supplies || [];
  
  supplies.forEach((item) => {
    if (!(item.depotId in contracts)) {
      contracts[item.depotId] = {
        id: item.depotId,
        name: item.depotSf,
        company: item.company,
      }
    }
  })
  
  return (
    [
      [
        { 
          id: 'logData', 
          elementGenerator: () => (
            <FormGroup style={{width: "80%"}}>
              <Label className='desc-sub' for="exampleSelect" style={{ margin: "10px 0 2px 0 " }}>Filtrar por estoque</Label>
              <Input type="select" name="select" id="exampleSelect" onChange={handleSetContractFilter}>
                <option>Sem filtro</option>
                {Object.keys(contracts).map(contractId => (
                  <option value={contractId} key={contractId}>{contracts[contractId].name} - {contracts[contractId].company}</option>
                ))}
              </Input>
            </FormGroup>
          ), 
          span: 1 
        },
        { 
          id: 'taskValue', title: 'Custo total da tarefa', 
          description: formatter.format(supplies.reduce((acc, item) => (item.totalPrice + acc), 0)), 
          span: 1 
        },
      ],
    ]
  );
}