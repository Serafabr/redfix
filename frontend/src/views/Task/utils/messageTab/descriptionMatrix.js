import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

export function logInfo(numEvent, handleLogTypeChange) {
  return (
    [
      [
        { 
          id: 'logData', 
          elementGenerator: () => (
            <FormGroup style={{width: "80%"}}>
              <Label className='desc-sub' for="exampleSelect" style={{ margin: "10px 0 2px 0 " }}>Exibir histórico de</Label>
              <Input type="select" name="select" id="exampleSelect" onChange={handleLogTypeChange}>
                <option value='all'>Todos eventos</option>
                <option value='dispatch'>Tramitações</option>
                <option value='status'>Status</option>
                <option value='notes'>Mensagens</option>
              </Input>
            </FormGroup>
          ), 
          span: 1 
        },
        { id: 'totalEvents', title: 'Total de eventos', description: numEvent, span: 1 }
      ],
    ]
  );
}
