import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import moment from 'moment';

function upperCaseFirstLetter(string) {
    return string.toString().charAt(0).toUpperCase() + string.toString().slice(1);
}

export function currentStateInfo({createdAt, taskStatusText, taskPriorityText, teamName, events}) {
  const lastSend = {
    note: "Tarefa tramitada sem observações",
    date: createdAt,
  };
  const lastReceive = {
    date: createdAt
  }
  
  events.forEach(event => {
    if (event.eventName === 'send') {
      if (moment(lastSend.date).isBefore(event.createdAt)) {
        lastSend.note = event.note;
        lastSend.date = event.createdAt;
      }
    }
    if (event.eventName === 'receive') {
      if (moment(lastSend.date).isBefore(event.createdAt)) {
        lastReceive.date = event.createdAt;
      }
    }
  })
  
  return (
    [
      [
        { id: 'status', title: 'Status', description: taskStatusText, span: 1 },
        { id: 'receivedDate', title: 'Tramitado em', description: moment(lastSend.date).format("DD-MM-YYYY"), span: 1 },
      ],
      [
        { id: 'team', title: 'Equipe', description: teamName, span: 1 },
        { id: 'totalDays', title: 'Recebido em', description: moment(lastReceive.date).format("DD-MM-YYYY"), span: 1 }
      ],
      [
        { id: 'team', title: 'Prioridade', description: taskPriorityText, span: 1 },
        { id: 'totalDays', title: 'Tempo com a tarefa', description: upperCaseFirstLetter(moment(lastSend.date).fromNow(true)), span: 1 }
      ],
      [
        { id: 'obs', title: 'Último despacho (tramitação)', description: lastSend.note, span: 2 },
      ],
    ]
  );
}

export function dispatchLogInfo(numEvent, handleLogTypeChange) {
  return (
    [
      [
        { 
          id: 'logData', 
          elementGenerator: () => (
            <FormGroup style={{width: "80%"}}>
              <Label className='desc-sub' for="exampleSelect" style={{ margin: "10px 0 2px 0 " }}>Exibir histórico de</Label>
              <Input type="select" name="select" id="exampleSelect" onChange={handleLogTypeChange}>
                <option value='all'>Tramitações e Status</option>
                <option value='assign'>Tramitações</option>
                <option value='status'>Status</option>
              </Input>
            </FormGroup>
          ), 
          span: 1 
        },
        { id: 'totalEvents', title: 'Número de eventos', description: numEvent, span: 1 }
      ],
    ]
  );
}
