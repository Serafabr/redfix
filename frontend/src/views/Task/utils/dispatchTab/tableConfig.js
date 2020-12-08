import React, { Component } from 'react';

function generateEventName(item) {
  const relationEvents = {
    insert: 'Criado',
    send: 'Tramitado',
    receive: 'Tarefa recebida',
    cancel: 'Tramitação cancelada',
    move: 'Status alterado'
  }
  return relationEvents[item.eventName];
}

function selectTeamOrStatus(item) {
  let result = null;
  
  if (item.eventName === 'move') {
    result = item.taskStatusText;
  } else if (item.eventName === 'send') {
    result = item.nextTeamName;
  } else {
    result = item.teamName;
  }

  return result;
}

function createSubTeam(item) {
  let result = null;
  
  if (item.eventName === 'move' || item.eventName === 'send') {
    result = item.teamName;
  } else {
    result = null;
  }

  return result;
}

function styleStatus(item, columnId) {
  if (item.eventName === 'cancel' && columnId === 'event') {
    return {
      fontWeight: '700',
      color: '#c12a2a',
    };
  }
  if (item.eventName === 'send' && columnId === 'event') {
    return {
      fontWeight: '700',
      color: '#8a7d24',
    };
  }
  if (item.eventName === 'receive' && columnId === 'event') {
    return {
      fontWeight: '700',
      color: '#27962f',
    };
  }
  if (item.eventName === 'move' && columnId === 'event') {
    return {
      fontWeight: '700',
      color: '#256898',
    };
  }
  if (item.eventName === 'insert' && columnId === 'event') {
    return {
      fontWeight: '700',
      color: '#181b1e',
    };
  }
  return null;
}

function createTeamStatusElement(teamStatus, item) {
  if (item.eventName === 'send') {
    return (
      <div>
        <span style={{fontWeight: '700'}}>PARA: </span> {teamStatus}
      </div>
    );
  } else if (item.eventName === 'receive' || item.eventName === 'cancel' || item.eventName === 'insert') {
    return (
      <div>
        <span style={{fontWeight: '700'}}>POR: </span> {teamStatus}
      </div>
    );
  }
  return (teamStatus);
}

function createSubTeamStatusElement(subTeam, item) {
  if (item.eventName === 'send') {
    return (
      <div>
        <span style={{fontWeight: '700'}}>DE: </span> {subTeam}
      </div>
    );
  } 
  return (subTeam);
}

function generateTimeText(item) {
  return item.createdAt.split("T")[0];
}


const tableConfig = {
  attForDataId: 'time',
  prepareData: {
    eventText: generateEventName,
    teamOrStatus: selectTeamOrStatus,
    subTeam: createSubTeam,
    timeText: generateTimeText,
  },
  styleBodyElement: styleStatus,
  columnsConfig: [
    { columnId: 'date', columnName: 'Data / Usuário', width: '20%', align: "center", idForValues: ['timeText', 'personName']},
    { columnId: 'event', columnName: 'Evento', width: '18%', align: "center", isTextWrapped: true, idForValues: ['eventText'], styleText: {fontSize: '0.7rem', border: '1px solid #dadada', borderRadius: '4px'}},
    { columnId: 'team', columnName: 'Equipe / Status', width: '27%', align: "justify", idForValues: ['teamOrStatus', 'subTeam'], createElementWithData: createTeamStatusElement, createElementWithSubData: createSubTeamStatusElement },
    { columnId: 'note', columnName: 'Observação', width: '35%', align: "justify", isTextWrapped: true, idForValues: ['note']},
  ]
};

export default tableConfig;